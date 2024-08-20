import styled from "styled-components"

const StyledButton = styled.button`
 background: #666666;
 border: none;
 border-radius: 20px;
 width: 100%;
 height: 49px;
 color: #FFFFFF;
`

const Botao = ({ texto }) => {
 return(
    <StyledButton>{texto}</StyledButton>
 )
}
export default Botao