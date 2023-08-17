import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import styles from './NavBar.module.scss';

export default function NavBar(){
    const local = useLocation();

    return(
        <nav className={styles.nav}>
            <Link 
                className={classNames({
                [styles.nav__link]: true,
                [styles.nav__link__ativo]: local.pathname === '/'
            })} 
                to='/'>
                    Home
            </Link>
            
            <Link className={classNames({
                [styles.nav__link]: true,
                [styles.nav__link__ativo]: local.pathname === '/pokedex'
            })} 
                to='/pokedex'>
                    Pokedex
            </Link>
            
            <Link className={classNames({
                [styles.nav__link]: true,
                [styles.nav__link__ativo]: local.pathname === '/lendarios'
            })} 
                to='/lendarios'>
                    Lendarios
            </Link>
        </nav>
    )
}