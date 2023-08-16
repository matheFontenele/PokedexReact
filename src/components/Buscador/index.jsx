import styles from './Buscador.module.scss'

export default function Buscador(){
    return(
        <input
        className={styles.buscador}
        placeholder="Buscar Pokemon"/>
    )
}