import styled from "styled-components"
import logo from "./logoW.png"

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 200px;
    width: 100%;
    padding: 1%;
    img{
        max-height: 200px;
    }
`

const Cabecalho = () => {
    return(
    <StyledHeader>
        <img src={logo} />
    </StyledHeader>)
}

export default Cabecalho