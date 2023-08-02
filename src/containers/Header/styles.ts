import styled from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    background-color: rgb(234, 198, 150, .4);
    display: flex;
    justify-content: center;
    padding: 32px;
`

export const HeaderContent = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    p {
        text-align: center;
        font-size: 32px;
        font-weight: bold;
        color: ${cores.marromMarca};
    }
    
    a {
        text-decoration: none;
        color: none;
        cursor: auto;
    }
`


export const Logo = styled.img`
    height: 100px;
    margin-bottom: 124px;
    border: 4px solid ${cores.marromMarca};
    cursor: pointer;
`

export const LinkHeader = styled(Link)`
    text-decoration: none;
`