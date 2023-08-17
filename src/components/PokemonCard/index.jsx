import { Link } from 'react-router-dom'
import styles from '../PokeList/PokeList.module.scss'

export default function PokemonCard({key, pokemon, img, classe, types, numero, id}){
    return(
        <Link to={`/pokedex/${id}`}>
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
        </Link>
        
    )
}