import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import poketeste from 'assets/imgs/poketest.png'


export default function Pokemon(){
    const local = useParams()
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${local.id}/`)
        .then((res) => setPokemon(res.data))
        .catch((erro) => console.log(erro))
    },[local.id])
    

    return(
        <section>
            <h1>{pokemon.name}</h1>
            <div>
                <img src={poketeste} alt={pokemon.name}/>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet ducimus assumenda aspernatur eaque porro cum voluptas soluta facilis, quo deleniti quia consectetur neque sunt itaque ad eius non. Quo, doloremque!</p>
                    <div>
                        {pokemon.abilities.map((abilit) => (
                            <span key={abilit.ability.name}>
                                <p>{abilit.ability.name}</p>
                            </span>
                            
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}