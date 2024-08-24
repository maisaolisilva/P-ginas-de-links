import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledButton = styled(Link)`
 background: #2c2a2a;
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
 &:hover{
   border: 2px solid #FFFFFF;
 }
 @media (min-width: 700px){
   width: 500px;
 }
`

const Botao = ({ texto, path }) => {
 return(
    <StyledButton to={path}>{texto}</StyledButton>
 )
}
export default Botao