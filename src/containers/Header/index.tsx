import { HeaderContainer, HeaderContent, Logo } from "./styles"
import LogoImg from '../../assets/images/logoHeader.jpeg'
import MenuBar from "../../components/MenuBar"
import { Link } from "react-router-dom"


const Header = () => {

    return (
        <>
            <HeaderContainer>
                <HeaderContent className="container">
                    <Link to={'/'}><Logo src={LogoImg}/></Link>
                    <p>O melhor da moda infantil</p>
                </HeaderContent>
            </HeaderContainer>
            <MenuBar />
        </>
    )
}

export default Header