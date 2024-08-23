import styled from "styled-components"
import EstilosGlobais from "../EstilosGlobais"
import { useId } from "react"

const StyledFigure = styled.figure`
    max-width: 150px;
    display: flex;
    flex-direction: column;
    margin: 0;
    img{
        border-radius: 20px 20px 0 0;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
    figcaption{
        text-align: center;
        a{
            display: block;
            text-decoration: none;
            color: #FFFFFF;
            background: #434141;
            padding: 0.5em;
            max-width: 100%;
            border-radius: 0 0 20px 20px;
            word-wrap: normal;
            font-weight: 200;
        }
    }
`

const Produto = ({ produto }) => {
    return(
        <>
            <EstilosGlobais />
            <StyledFigure key={useId()}>
                <img src={produto.imagem}/>
                <figcaption><a href={produto.link}>Confeir Produto</a></figcaption>
            </StyledFigure>

        </>
    )
}
export default Produto