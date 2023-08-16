import styles from './Footer.module.scss'
import { BiLogoLinkedinSquare, BiLogoGmail, BiLogoWhatsapp, BiLogoGithub } from 'react-icons/bi'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p className={styles.footer__name}>@Matheus Fontenele</p>
            <ul className={styles.footer__list}>
                <a href='https://github.com/matheFontenele/matheFontenele/edit/main/README.md' className={styles.footer__list__item}><BiLogoLinkedinSquare/></a>
                <a href='https://github.com/matheFontenele/matheFontenele/edit/main/README.md' className={styles.footer__list__item}><BiLogoGmail/></a>
                <a href='https://github.com/matheFontenele/matheFontenele/edit/main/README.md' className={styles.footer__list__item}><BiLogoWhatsapp/></a>
                <a href='https://github.com/matheFontenele/matheFontenele/edit/main/README.md' className={styles.footer__list__item}><BiLogoGithub/></a>
            </ul>
        </footer>
    )
}