
import {    useParams } from "react-router-dom"
import produtos from "../../../public/produtos.json"
import Cabecalho from "../../componetes/Cabecalho"
import EstilosGlobais from "../../componetes/EstilosGlobais"
import Produto from "../../componetes/Produto"
import Titulo from "../../componetes/Titulo"
import styled from "styled-components"
import Rodape from "../../componetes/Rodape"

const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    padding: 0;
    margin-bottom: 20%;
    li{
        list-style-type: none;
        flex-shrink: 1 1 auto;
        margin: 0;
    }
`


const ProdutosLista = () => {
    const parametros = useParams()
    return(
    <>
        <EstilosGlobais />
        <Cabecalho />
        <Titulo>{parametros.tipo}</Titulo>
        <StyledUl>
            {produtos.map(produto => produto.tipo === parametros.tipo ? <li><Produto produto={produto}/></li> : "")}
        </StyledUl>
        <Rodape />
    </>
    )
}

export default ProdutosLista