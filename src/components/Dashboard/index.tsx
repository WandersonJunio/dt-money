import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";

const props = {
  valorEntrada: 500,
  valorSaida: 500
}


export function Dashboard() {
  return (
    <Container>
      <Summary props={props}/>
      <TransactionsTable />
    </Container>
  )
}