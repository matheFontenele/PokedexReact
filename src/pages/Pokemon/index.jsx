import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Pokemon(){
    const local = useParams()
    const [pokemon, setPokemon] = useState({})
    const url = `https://pokeapi.co/api/v2/pokemon/${local.id}`

    useEffect(() => {
        axios.get(url)
        .then((res) => setPokemon(res.data))
        .catch((error) => console.log(error))
    },[url])

    console.log(pokemon)
    
    return(
        <div>
            <h1>{pokemon.name}</h1>
            <p>altura {pokemon.height}</p>
        </div>
        
    )
}