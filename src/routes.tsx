import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Inverno from "./containers/Inverno";
import Verao from "./containers/Verao";

const Rotas = () => {

    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verao" element={<Verao/>} />
        <Route path="/inverno" element={<Inverno/>} />
    </Routes>
    )
    
}

export default Rotas