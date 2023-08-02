import { Links, MenuBarContainer, MenuBarContent } from "./styles"


const MenuBar = () => {

    return (
        <MenuBarContainer>
            <MenuBarContent className="container">
                <Links to={'/verao'}>Verão</Links>
                <Links to={'/inverno'}>Inverno</Links>
                <Links to={'https://www.instagram.com/mabrykidsloja/'}>Contato</Links>
            </MenuBarContent>
        </MenuBarContainer>
    )
}

export default MenuBar