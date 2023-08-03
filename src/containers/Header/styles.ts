import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";


export const Espacador = styled.div`
    margin-bottom: 80px;
`

export const HeaderContainer = styled.div`
    background-color: rgb(234, 198, 150, .4);
    display: flex;
    justify-content: center;
`

export const HeaderContent = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -40px;
    margin-top: -40px;
    
    a {
        text-decoration: none;
        color: none;
        cursor: auto;
    }
`


export const Logo = styled.img`
    height: 250px;
    /* border: 4px solid ${cores.marromMarca}; */
    cursor: pointer;
`

export const LinkHeader = styled(Link)`
    text-decoration: none;
`