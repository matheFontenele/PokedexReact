import styles from './PokeList.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from 'components/Pokemon';
import classNames from 'classnames';


export default function PokeList(){
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getPokemons()
    },[])

    function getPokemons(){
        let endpoints = []
        for(let i = 1; i <= 600; i++){
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        }
        let response = axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
        .then((res) => setPokemons(res))
        .catch((erro) => console.log(erro))
        return response
    }
    pokemons.map(poke => console.log(poke.data.id))
    return(
        <section className={styles.pokedex}>
            {pokemons.map((pokemon) => (
                <Pokemon 
                    key={pokemon.data.name} 
                    pokemon={pokemon.data.name}
                    numero={`#${pokemon.data.id.toString().padStart(3, '0')}`}
                    img={pokemon.data.sprites.other.dream_world.front_default}
                    types={pokemon.data.types.map((type) => (
                        <span
                            className={styles.types}
                            key={type.type.slot}>
                                <p
                                className={classNames({
                                [styles.types__type]:true,
                                [styles[`types__type__${type.type.name}`]]:true
                                })}>
                                {type.type.name}
                                </p>
                        </span>
                    ))}
                    classe={classNames({
                        [styles.pokemon__boximg]: true,
                        [styles[`pokemon__boximg__${pokemon.data.types[0].type.name}`]]: true
                    })}/>
            ))}

        </section>
    )
}