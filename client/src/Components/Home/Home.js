import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';

const Home = () => {
    return (
        <section className="fundo">
            <h1>Seja muito <span> Bem-vind@</span></h1>
            <h2>Comece uma nova Aventura entre Camisas agora mesmo!</h2>
            <Link to="/listaprodutos">
                <Button variant="dark" size="sm" type='select'>Ver Produtos</Button>
            </Link>
        </section>
    )
}

export default Home