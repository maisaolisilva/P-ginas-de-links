import styled from "styled-components"
import { FaRegCopyright } from "react-icons/fa"
import { GiReturnArrow } from "react-icons/gi";
import { Link } from "react-router-dom";


const StyeledLink = styled(Link)`
    color: #FFFFFF;
`
const StyledFooter = styled.footer`
    background: #000000;
    padding: 0em 1em;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
        display: flex;
        gap: 5px;
        font-weight: 200;
        align-items: center;
    }
`

const Rodape = () => {
    return( <StyledFooter>
        <h2><FaRegCopyright size={20}/> Desenvolvido por Maisa</h2>
        <StyeledLink to="/"><GiReturnArrow size={40}/></StyeledLink>
    </StyledFooter>
    )
}

export default Rodape