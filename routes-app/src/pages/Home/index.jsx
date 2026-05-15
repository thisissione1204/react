import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Pagina Home</h1>
            <h2>Bem-vindo a pagina home</h2>

            <Link to='/sobre'>Pagina Sobre</Link> <br />
            <Link to='/contato'>Pagina Contato</Link>
        </div>
    )
}
export default Home;