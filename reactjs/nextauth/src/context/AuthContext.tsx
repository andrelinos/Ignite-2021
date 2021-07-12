import Router from 'next/router'
import { createContext, ReactNode, useEffect, useState, useContext } from 'react'

import { parseCookies, setCookie, destroyCookie } from 'nookies'

import { api } from '../services/api'

type User = { 
  email: string
  permissions: string[]
  roles: string[]
}

type SigInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SigInCredentials): Promise<void>
  signOut: () => void
  user?: User
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

let authChannel: BroadcastChannel;

export function signOut() {
  destroyCookie(undefined, 'nextauth.token');
  destroyCookie(undefined, 'nextauth.refreshToken');
//  authChannel.postMessage('signOut')
  Router.push('/');
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

     if(token) {
      api.get('/me')
        .then(response => {
          const { email, permissions, roles } = response.data

        setUser({ email, permissions, roles })
      }).catch(() => {
        signOut();
      })
    }
  }, [])

  async function signIn({ email, password }: SigInCredentials) {
    try {
      const response = await api.post('sessions', { 
        email, 
        password,
      })

      const { token, refreshToken, permissions, roles } = response.data

      setCookie(undefined, 'nextauth.token', token, { 
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      setCookie(undefined, 'nextauth.refreshToken', refreshToken, { 
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })
  
      setUser({
        email,
        permissions,
        roles
      })

      api.defaults.headers['Authorization'] = `Bearer ${token}`

      Router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <AuthContext.Provider value={{ 
      signIn, 
      isAuthenticated, 
      user,
      signOut
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const data = useContext(AuthContext);
  return data;
}