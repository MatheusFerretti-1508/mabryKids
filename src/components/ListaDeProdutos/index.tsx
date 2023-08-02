import { Card, ListaDeProdutosContainer, TituloDaSecao } from "./styles"

type Props = {
    titulo: string,
}


const ListaDeProdutos = ({titulo}:Props) => {

    return (
        <>
            <TituloDaSecao>{titulo}</TituloDaSecao>
            <ListaDeProdutosContainer>
            <Card>
                <img src="https://via.placeholder.com/320x320" alt="" />
                <small>Garotos 6-14 anos</small>
                <h3>Camisa social azul</h3>
                <p>R$ 320,00</p>
                <button type="button">Comprar</button>
            </Card>
            <Card>
                <img src="https://via.placeholder.com/320x320" alt="" />
                <small>Garotos 6-14 anos</small>
                <h3>Camisa social azul</h3>
                <p>R$ 320,00</p>
                <button type="button">Comprar</button>
            </Card>
            <Card>
                <img src="https://via.placeholder.com/320x320" alt="" />
                <small>Garotos 6-14 anos</small>
                <h3>Camisa social azul</h3>
                <p>R$ 320,00</p>
                <button type="button">Comprar</button>
            </Card>
            <Card>
                <img src="https://via.placeholder.com/320x320" alt="" />
                <small>Garotos 6-14 anos</small>
                <h3>Camisa social azul</h3>
                <p>R$ 320,00</p>
                <button type="button">Comprar</button>
            </Card>
            <Card>
                <img src="https://via.placeholder.com/320x320" alt="" />
                <small>Garotos 6-14 anos</small>
                <h3>Camisa social azul</h3>
                <p>R$ 320,00</p>
                <button type="button">Comprar</button>
            </Card>
            <Card>
                <img src="https://via.placeholder.com/320x320" alt="" />
                <small>Garotos 6-14 anos</small>
                <h3>Camisa social azul</h3>
                <p>R$ 320,00</p>
                <button type="button">Comprar</button>
            </Card>
            <Card>
                <img src="https://via.placeholder.com/320x320" alt="" />
                <small>Garotos 6-14 anos</small>
                <h3>Camisa social azul</h3>
                <p>R$ 320,00</p>
                <button type="button">Comprar</button>
            </Card>
            <Card>
                <img src="https://via.placeholder.com/320x320" alt="" />
                <small>Garotos 6-14 anos</small>
                <h3>Camisa social azul</h3>
                <p>R$ 320,00</p>
                <button type="button">Comprar</button>
            </Card>
        </ListaDeProdutosContainer>
        </>
    )
}

export default ListaDeProdutos