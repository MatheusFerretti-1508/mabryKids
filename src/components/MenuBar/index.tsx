import { Links, MenuBarContainer, MenuBarContent } from "./styles"

type Props = {
    sloganOuLinks: 'slogan' | 'links'
}


const MenuBar = ({sloganOuLinks}:Props) => {

    return (
        <MenuBarContainer>
            <MenuBarContent className="container">
                {sloganOuLinks === 'links' ? 
                (<>
                <Links to={'/verao'}>Verão</Links>
                <Links to={'/inverno'}>Inverno</Links>
                <Links to={'https://www.instagram.com/mabrykidsloja/'}>Contato</Links>
                </>) : (
                <p>O melhor da moda infantil</p>
                )}

            </MenuBarContent>
        </MenuBarContainer>
    )
}

export default MenuBar