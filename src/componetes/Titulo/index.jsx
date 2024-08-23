import styled from "styled-components";

const StyledTitule = styled.h1`
    text-decoration: underline;
    text-align: center;
`
const Titulo = ({ children }) => {
    if(children == "fitness"){
        return <StyledTitule>Produtos Fitness</StyledTitule>
    }else{
        if(children == "vestuario"){
            return <StyledTitule>Produtos de Vestuário</StyledTitule>
        }else{
            return <StyledTitule>Produtos de Vestuário</StyledTitule>
        }
    } 
     
}

export default Titulo