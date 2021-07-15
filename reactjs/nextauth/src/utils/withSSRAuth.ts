import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { destroyCookie, parseCookies } from "nookies"
import decode from 'jwt-decode'

import { AuthTokenError } from "../services/errors/AuthTokenError"
import { validateUserPermissions } from "./validateUserPermissions"

type WithSSRAuthOptions = {
  permissions?: string[]
  roles?: string[]
}

type UserPermissionsTypes = {
  permissions: string[]
  roles: string[]
}

export function WithSSRAuth<P>(fn: GetServerSideProps<P>, options?: WithSSRAuthOptions): GetServerSideProps {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)
    const token = cookies["nextauth.token"]

    if (!token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        }
      }
    }

    if (options) {
      const user = decode<UserPermissionsTypes>(token)
      const { permissions, roles } = options

      const userHasPermissions = validateUserPermissions({
      user, 
      permissions, 
      roles
    })

    if (!userHasPermissions) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        }
      }
    }
    }
    

    try {
      return await fn(ctx)
      
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, 'nextauth.token')
        destroyCookie(ctx, 'nextauth.refreshToken')
  
     return {
       redirect: {
         destination: '/',
         permanent: false
       }
      }
      }
    }
  }
}

