import { BgInsta, FooterContainer, FooterContent } from "./styles"
import instagramImg from '../../assets/images/instagram-svgrepo-com (1).svg'


const Footer = () => {

    return (
        <FooterContainer>
            <FooterContent className="container">
                <p><small>Telefone:</small>47 9764-2166</p>
                <p> <BgInsta><a href="https://www.instagram.com/mabrykidsloja/"><img src={instagramImg} alt="logo do instagram" /></a></BgInsta></p>
                <p>Todos os direitos reservados - MabryKids - CNPJ: 12.621.018/0001-90 Endereço: Rua dos Caçadores 3522 - Velha Central - CEP 89040-313 - Blumenau - SC © mabrykids.com.br</p>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer