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
            <Botao texto="Produtos Fitness/Esportes" path="/produtos/fitness"/>
            <Botao texto="Produtos de Vestuário" path="/produtos/vestuario"/>
            <Botao texto="Produtos Eletrônicos" path="/produtos/eletronico"/>
            <Botao texto=" Produtos para Casa" path="/produtos/casa"/>
            <Botao texto=" Produtos de Cuidados Pessoais" path="/produtos/cuidadospessoais"/>
        </StyledMain>
    )
}

export default Main