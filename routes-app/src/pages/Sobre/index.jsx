import { Link } from "react-router-dom"

function Sobre() {
    return (
        <div>
            <h1>Pagina Sobre</h1>
            <h2>Bem-vindo a pagina sobre</h2>
            
            <Link to='/'>Pagina Home</Link> <br />
            <Link to='/contato'>Pagina Contato</Link>
        </div>
    )
}

export default Sobre;