import styled from "styled-components"
import Botao from "./Botao"
const StyledMain = styled.main`
    margin: 1%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    justify-content: center;
`
const Main = () => {
    return(
        <StyledMain>
            <Botao texto="Produtos em Promoção" />
            <Botao texto="Vestuário" />
            <Botao texto="Eletrônicoas" />
        </StyledMain>
    )
}

export default Main