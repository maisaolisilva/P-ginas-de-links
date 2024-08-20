import styled from "styled-components"
import EstilosGlobais from "./componetes/EstilosGlobais"
import Cabecalho from "./componetes/Cabecalho"

const StyledBackground = styled.div`
 background: linear-gradient(#000000 35%, #666666 76%);
 width: 100%;
 min-height: 100vh;
`

function App() {


  return (
    <StyledBackground>
        <EstilosGlobais />
        < Cabecalho />
    </StyledBackground>
    
  )
}

export default App
