import styled from "styled-components";
import { cores } from "../../styles";


export const FooterContainer = styled.div`
    background-color: rgb(234, 198, 150, .4);
    padding: 32px;
    margin-top: 80px;
`

export const FooterContent = styled.footer`
    color: ${cores.marromMarca};
    display: flex;
    justify-content: space-between;

    div {
        display: inline-block;

        h4 {
            font-weight: 900;
            margin-bottom: 8px;
            font-size: 24px;
        }

        h5 {
            font-weight: 400;
            font-size: 16px;
            margin-bottom: 8px;
            display: flex;
            align-items: center;

            div {
                background-color: #d2ab67;
                border-radius: 50%;
                padding: 4px;
                margin-right: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            img {
                    width: 24px;
                    height: 24px;
                }

            a {
                display: flex;
                align-items: center;
                text-decoration: none;
                color: ${cores.marromMarca};

                img {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }

    small {
        font-size: 16px;
        margin-right: 8px;
        font-weight: 400;
    }
    
    p {
        margin: 0 auto;
        font-weight: 400;
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        
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

        img {
            width: 24px;
            height: 24px;
            cursor: pointer;
            margin-right: 0 !important;
        }
    }
`