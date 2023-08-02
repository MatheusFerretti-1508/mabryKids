import { HeaderContainer, HeaderContent, Logo } from "./styles"
import LogoImg from '../../assets/images/logoHeader.jpeg'


const Header = () => {

    return (
        <HeaderContainer>
            <HeaderContent className="container">
                <h1><Logo src={LogoImg}/></h1>
                <p>O melhor da moda infantil</p>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header