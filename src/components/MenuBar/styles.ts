import { styled } from "styled-components";
import { cores } from "../../styles";
import { Link } from "react-router-dom";


export const MenuBarContainer = styled.div`
    background-color: ${cores.marromMarca};
    color: ${cores.branco};
    margin-bottom: 80px;
`

export const MenuBarContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
`

export const Links = styled(Link)`
        font-size: 24px;
        transition: transform 1s ease;
        text-decoration: none;
        color: ${cores.branco};

        &:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
`