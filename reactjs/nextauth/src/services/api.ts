import axios, { AxiosError} from 'axios'
import { parseCookies, setCookie } from 'nookies'

type FailedRequestQueue = { 
  onSuccess: (token: string) => void 
  onFailure: (err: AxiosError<any>) => void
}

let cookies = parseCookies()
let isRefreshing = false
let failedRequestQueue: FailedRequestQueue[]

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${cookies['nextauth.token']}`
  }
})

api.interceptors.response.use(response => response, 
(error: AxiosError) => {
  if (error.response?.status === 401) {
    if (error.response.data?.code === 'token.expired') {
      cookies = parseCookies()

      const { 'nextauth.refreshToken': refreshToken } = cookies
      const originalConfig = error.config

      if (!isRefreshing) {
        isRefreshing = true

        api.post('/refresh', {
          refreshToken
        }).then(response => { 
          const { token } = response.data
         
  
          setCookie(undefined, 'nextauth.token', token, { 
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/'
          })
    
          setCookie(undefined, 'nextauth.refreshToken', response.data.refreshToken, { 
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/'
          })
    
          api.defaults.headers['Authorization'] = `Bearer ${token}`

          failedRequestQueue.forEach(request => request.onSuccess(token))
          failedRequestQueue = []
        }).catch(err => {
          failedRequestQueue.forEach(request => request.onFailure(err))
          failedRequestQueue = []
        }).finally(() => {
          isRefreshing = false
        })
      }

      return new Promise((resolve, reject) => {
        failedRequestQueue.push({
          onSuccess: (token: string) => {
            originalConfig.headers['Authorization'] = `Bearer ${token}`

            resolve(api(originalConfig))
          },
          onFailure: (err: AxiosError) => {
            reject(err)
          }
        })
      })
    } else {
      // deslogar usuário
    }
  }
}
)
