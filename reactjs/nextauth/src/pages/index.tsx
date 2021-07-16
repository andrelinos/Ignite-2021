import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { FormEvent, useContext, useState } from 'react'

import { AuthContext } from '../context/AuthContext'

import styles from '../styles/Home.module.css'
import { WithSSRGuest } from '../utils/withSSRGuest'

export default function Home() {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSumit(e: FormEvent) { 
    e.preventDefault()

    const data = {
      email,
      password,
    }

   await signIn(data)
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSumit} className={styles.form}>
        <input type="email" value={email} id="email-300" onChange={e => setEmail(e.target.value)} />
        <input
          type="password"
          value={password}
          id="password"
          name="current-password"
          autoComplete="on"
          onChange={e => setPassword(e.target.value)} 
          />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export const getServerSideProps = WithSSRGuest(async (ctx) => {
   return {
     props: {}
  }
})