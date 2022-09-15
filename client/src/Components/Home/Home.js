import { Link } from 'react-router-dom'
import { Button } from "react-bootstrap";
import './Home.css'

const Home = () => {
    return (
        <section className="fundo">
            <h1>Seja muito <span> Bem-vind@</span></h1>
            <p>Comece uma nova Aventura entre Camisas agora mesmo!</p>
            <Link to="/categoria">
              <Button variant="dark" type='select'>Ver Categoria</Button>
            </Link>
        </section>
    )
}

export default Home