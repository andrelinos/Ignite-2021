import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>R$1100.00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>-R$100.00</strong>
      </div>
      <div className="hightlight-bg-green">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>R$1000.00</strong>
      </div>
    </Container>
  )
}
