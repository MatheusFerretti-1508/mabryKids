import imagemTeste from '../assets/images/LOGOTESTEv2-removebg-preview.png'


type Produto = {
    classificacao: string,
    nome: string,
    preço: string,
    foto: string
}

export const Produtos:Produto[] = [
    {
        classificacao: 'Garotos 6-14 anos',
        nome: 'Camisa social',
        preço: 'R$ 320,00',
        foto: `${imagemTeste}`,
    }
]