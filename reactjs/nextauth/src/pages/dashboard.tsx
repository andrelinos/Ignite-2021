import { useContext, useEffect } from "react"
import { Can } from "../components/Can"
import { AuthContext} from "../context/AuthContext"
import { useCan } from "../hooks/useCan"
import { setupAPIClient } from "../services/api"
import { api } from "../services/apiClient"

import { WithSSRAuth } from "../utils/withSSRAuth"

export default function Dashboard() {
  const { user } = useContext(AuthContext)

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }, [])

  return (
    <div
      style={{
      margin: "0",
      padding: "10px",
      background: "#333333",
      width: "100vw",
      height: "100vh"
    }}
      >
      <h1 style={{color: "#eee"}}>Dashboard: {user?.email}</h1>
      <Can permissions={['metrics.list']}>
        <div style={{color: "green"}}>Métricas</div>
      </Can>
    </div>
  )
}

export const getServerSideProps = WithSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/me') 

  console.log(response.data)

  return {
    props: {}
  }
})