import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledButton = styled(Link)`
 background: #666666;
 border: none;
 border-radius: 20px;
 width: 100%;
 height: 49px;
 color: #FFFFFF;
 text-decoration: none;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 24px;
 font-weight: 300;
`

const Botao = ({ texto, path }) => {
 return(
    <StyledButton to={path}>{texto}</StyledButton>
 )
}
export default Botao