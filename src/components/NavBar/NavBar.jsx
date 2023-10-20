import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/about'>About</Link>
                <Link to='/todolist'>Todo List</Link>
            </nav>
        </header>
    )
}

export default NavBar;