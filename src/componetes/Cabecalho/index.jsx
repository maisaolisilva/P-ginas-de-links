import styled from "styled-components"
import logo from "./logoW.png"

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: auto;
    padding: 1%;
    img{
        max-height: 150px;
    }
`

const Cabecalho = () => {
    return(
    <StyledHeader>
        <img src={logo} />
    </StyledHeader>)
}

export default Cabecalho