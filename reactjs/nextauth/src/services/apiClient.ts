import { GetServerSidePropsContext } from 'next'
import { setupAPIClient } from './api'

export const api = setupAPIClient()