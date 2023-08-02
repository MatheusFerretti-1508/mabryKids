import styled from "styled-components";
import { cores } from "../../styles";


export const FooterContainer = styled.div`
    background-color: rgb(234, 198, 150, .4);
    padding: 32px;
    margin-top: 80px;
`

export const FooterContent = styled.footer`
    color: ${cores.marromMarca};
    display: grid;
    grid-template-columns: 1fr;
    
    small {
        font-size: 16px;
        margin-right: 8px;
    }
    
    p {
        margin: 0 auto;
        font-weight: bold;
        display: flex;
        align-items: center;
        text-align: center;
        margin-bottom: 16px;

        img {
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
    }
`

export const BgInsta = styled.div`
    background-color: #d2ab67;
    border-radius: 50%;
    padding: 4px;
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
    }
`