import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard/index';


function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  )
}

export default App;
