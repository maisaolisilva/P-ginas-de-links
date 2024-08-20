import styled from "styled-components"
import EstilosGlobais from "./componetes/EstilosGlobais"
import Cabecalho from "./componetes/Cabecalho"
import Main from "./componetes/Main"

const StyledBackground = styled.div`
 background: linear-gradient(#000000 35%, #666666 76%);
 width: 100%;
 min-height: 100vh;
`

function App() {


  return (
    <StyledBackground>
        <EstilosGlobais />
        <Cabecalho />
        <Main />
    </StyledBackground>
    
  )
}

export default App
