import ListaDeProdutos from "../../components/ListaDeProdutos"
import Footer from "../Footer"
import Header from "../Header"


const Inverno = () => {

    return (
        <>
        <Header />
        <div className="container">
        <ListaDeProdutos titulo="Coleção inverno" />
        </div>
        <Footer />
        </>
    )
}

export default Inverno