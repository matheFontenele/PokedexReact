import styles from '../PokeList/PokeList.module.scss'

export default function Pokemon({key, pokemon, img, classe, types, numero}){
    return(
        <div key={key} className={styles.pokemon}>
                <div className={styles.pokemon__pokedetals}>
                    <h1 className={styles.pokemon__pokedetals__name}>{pokemon}</h1>
                    <div className={styles.types}>
                        {types}
                    </div>
                    <h3>{numero}</h3>
                </div>
                <div className={classe}>
                    <img className={styles.pokemon__boximg__img} src={img} alt='teste'/>
                </div>
            </div> 
    )
}