
import { useParams } from "react-router-dom"
import produtos from "../../../public/produtos.json"
import Cabecalho from "../../componetes/Cabecalho"
import EstilosGlobais from "../../componetes/EstilosGlobais"
import Produto from "../../componetes/Produto"
import Titulo from "../../componetes/Titulo"
import styled from "styled-components"
import Rodape from "../../componetes/Rodape"

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2% 2% 25% 2%;  
`

const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-grow: 1;
    gap: 6%;
    
    li{
        list-style-type: none;
        margin: 0;
    }
`


const ProdutosLista = () => {
    const parametros = useParams()
    return(
    <StyledSection>
        <EstilosGlobais />
        <Cabecalho />
        <Titulo>{parametros.tipo}</Titulo>
        <StyledUl>
            {produtos.map(produto => produto.tipo === parametros.tipo ? <li><Produto produto={produto}/></li> : "")}
        </StyledUl>
        <Rodape />
    </StyledSection>
    )
}

export default ProdutosLista