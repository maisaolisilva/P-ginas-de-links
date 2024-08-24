import styled from "styled-components"
import EstilosGlobais from "../EstilosGlobais"
import { useId } from "react"

const StyledFigure = styled.figure`
    max-width: 150px;
    display: flex;
    flex-direction: column;
    margin: 0;
    &:hover{
        cursor: pointer;
        border: 2px solid #FFFFFF;
        border-radius: 20px;
    }
    img{
        border-radius: 20px 20px 0 0;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    figcaption{
        text-align: center;
        background: #434141;
        border-radius: 0 0 20px 20px;
        p{
            color: #FFFFFF;
            word-wrap: normal;
            font-weight: 400;
        }
    }
    @media(min-width: 700px){
        max-width: 200px;
    }
`

const Produto = ({ produto }) => {
    return(<>
        <EstilosGlobais />
            <a href={produto.link}>
                <StyledFigure key={useId()}>
                    <img src={produto.imagem}/>
                    <figcaption><p>Conferir Produto</p></figcaption>
                </StyledFigure>
            </a>

        
    </>)
}
export default Produto