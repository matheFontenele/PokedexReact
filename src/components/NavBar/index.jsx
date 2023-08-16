import { Link } from "react-router-dom";

export default function NavBar({navClass, linkClass}){
    return(
        <nav className={navClass}>
            <Link className={linkClass} to='/'>Home</Link>
            <Link className={linkClass} to='/pokedex'>Pokedex</Link>
            <Link className={linkClass} to='/lendarios'>Lendarios</Link>
        </nav>
    )
}