import { styled } from "styled-components";
import { cores } from "../../styles";


export const ListaDeProdutosContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;

    @media (max-width: 768px) {
        display: block;
        margin: 0 auto;
        width: 90%;
    }
`

export const Card = styled.div`
    height: 543px;
    width: 336px;
    margin: 0 auto;
    color: ${cores.marromMarca};

    img {
        width: 100%;
        height: 421px;
    }

    small {
        font-size: 12px;
        margin-bottom: 4px;
    }

    h3 {
        font-size: 16px;
        margin-bottom: 4px;
    }

    p {
        margin-bottom: 4px;
    }

    button {
        cursor: pointer;
        width: 100%;
        padding: 4px;
        border: none;
        color: ${cores.branco};
        background-color: ${cores.verdeMarca};

        &:hover {
            background-color: rgb(0,166,80, .8);
        }
    }

    @media (max-width: 768px) {
        margin-bottom: 48px;
    }
`

export const TituloDaSecao = styled.h2`
    margin: 0 auto;
    width: 90%;
    font-size: 28px;
    margin-bottom: 36px;
    color: ${cores.marromMarca};
`