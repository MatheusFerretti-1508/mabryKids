import { Espacador, HeaderContainer, HeaderContent, Logo } from "./styles"
import LogoImg from '../../assets/images/LOGOTESTE-removebg-preview.png'
import MenuBar from "../../components/MenuBar"
import { Link } from "react-router-dom"
import Banner from "../../components/Banner"
import banner from '../../assets/images/bannerMabryofc.png'


const Header = () => {

    return (
        <Espacador>
            <HeaderContainer>
                <HeaderContent className="container">
                    <Link to={'/'}><Logo src={LogoImg}/></Link>
                </HeaderContent>
            </HeaderContainer>
            <MenuBar sloganOuLinks="links" />
            <Banner imgBanner={banner}/>
            <MenuBar sloganOuLinks="slogan"/>
        </Espacador>
    )
}

export default Header