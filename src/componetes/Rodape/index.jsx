import styled from "styled-components"
import { FaRegCopyright } from "react-icons/fa"
import { GiReturnArrow } from "react-icons/gi";
import { Link } from "react-router-dom";


const StyeledLink = styled(Link)`
    color: #FFFFFF;
`
const StyledFooter = styled.footer`
    background: #000000;
    padding: 0.5;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        display: flex;
        gap: 5px;
    }
`

const Rodape = () => {
    return( <StyledFooter>
        <h2><FaRegCopyright /> Desenvolvido por Maisa</h2>
        <StyeledLink to="/"><GiReturnArrow size={50}/></StyeledLink>
    </StyledFooter>
    )
}

export default Rodape