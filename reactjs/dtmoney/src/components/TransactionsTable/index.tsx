import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>05/04/2021</td>
          </tr>
          <tr>
            <td>Carro</td>
            <td className="withdraw">-1.000</td>
            <td>Veículo</td>
            <td>05/04/2021</td>
          </tr>
          <tr>
            <td>Alguel</td>
            <td className="withdraw">- R$5.000</td>
            <td>Casa</td>
            <td>02/04/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento de App</td>
            <td className="deposit">R$2.000</td>
            <td>Desenvolvimento</td>
            <td>01/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
