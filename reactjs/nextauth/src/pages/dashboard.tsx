import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { AuthTokenErro } from "../services/errors/AuthTokenErro";

import { WithSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }, [])

  return (
    <h1>Dashboard: {user?.email}</h1>
  )
}

export const getServerSideProps = WithSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)
  
  try {
    const response = await apiClient.get('/me') 
    
    console.log(response.data)
  } catch (err) {
    console.log(err instanceof AuthTokenErro)
  }
  

  return {
    props: {}
  }
})