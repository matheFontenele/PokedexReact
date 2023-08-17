import logo from 'assets/imgs/Logo.png'
import NavBar from 'components/NavBar'
import styles from './Header.module.scss'

export default function Header(){


    return(
        <header className={styles.header}>
            <img className={styles.header__logo} src={logo} alt='logo'/>
            <NavBar/>
        </header>
    )
}