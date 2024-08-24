import styled from "styled-components";

const StyledTitule = styled.h1`
    text-decoration: underline;
    text-align: center;
`
const Titulo = ({ children }) => {
    switch(children){
        case "fitness":
            return <StyledTitule>Fitness/Esportes</StyledTitule>
    
       case "vestuario":
            return <StyledTitule>Vestuário</StyledTitule>
        case "eletronico":
            return <StyledTitule>Eletrônicos</StyledTitule>
        case "casa":
            return <StyledTitule>Casa</StyledTitule>
        case "cuidadospessoais":
            return <StyledTitule>Cuidados Pessoais</StyledTitule>
    } 
     
}

export default Titulo