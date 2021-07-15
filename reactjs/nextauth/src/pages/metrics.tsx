import { setupAPIClient } from '../services/api'
import { WithSSRAuth } from '../utils/withSSRAuth'


export default function Metrics() {
  return (
    <div
      style={{
      margin: '0',
      padding: '10px',
      background: '#333333',
      width: '100vw',
      height: '100vh'
    }}
      >
      <h1 style={{color: '#eee'}}>Metrics</h1>

    </div>
  )
}

export const getServerSideProps = WithSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx)
  const response = await apiClient.get('/me') 

  return {
    props: {}
  }
}, {
  permissions: ['metrics.list'],
  roles: ['administrator']
})