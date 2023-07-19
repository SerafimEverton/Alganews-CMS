import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {

    return <nav>
        <List>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contato">Contato</Link></li>
        </List>
    </nav>
}

const List = styled.ul`

display: flex;
flex-direction: column;
gap: 12px;
list-style: none;

`

const Item = styled.li`

text-transform: lowercase;
font-size: 18px;

a {
    text-decoration: none;
    color: #274060;

}

`