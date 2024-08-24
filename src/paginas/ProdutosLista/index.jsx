
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
    height: calc(100% - 50px);
    margin: 2% 2% 10% 2%; 
`
const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: 10px;
    li{
        list-style-type: none;
        margin: 0;
    }
    @media(min-width: 700px){
        gap: 25px;
    }
    @media(min-width: 1300px){
        margin-top: 0;
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
            {produtos.map(produto => produto.tipo === parametros.tipo ? <li><Produto produto={produto}/></li> : null)}
        </StyledUl>
        <Rodape />
    </StyledSection>
    )
}

export default ProdutosLista