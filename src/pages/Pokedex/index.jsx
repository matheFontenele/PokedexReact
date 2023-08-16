import Buscador from "components/Buscador";
import PokeList from "components/PokeList";
import styles from './Pokedex.module.scss';

export default function Pokedex(){
    return(
        <main className={styles.main}>
            <h1>600 Pokemons for you to choose your favorite</h1>
            <Buscador/>
            <PokeList/>
        </main>
    )
}