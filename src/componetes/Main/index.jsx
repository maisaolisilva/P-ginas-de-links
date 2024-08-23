import styled from "styled-components"
import Botao from "./Botao"
const StyledMain = styled.main`
    margin: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;
`
const Main = () => {
    return(
        <StyledMain>
            <Botao texto="Produtos Fitness" path="/produtos/fitness"/>
            <Botao texto="Produtos de Vestuário" path="/produtos/vestuario"/>
            <Botao texto=" Eletrônicos" path="/produtos/eletronicos"/>
        </StyledMain>
    )
}

export default Main