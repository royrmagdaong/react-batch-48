import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"

function PokemonList(){
    const [pokemons, setPokemons] = useState([])
    
    useEffect(()=>{
        console.log('Fetch Pokemon')
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(res => res.json())
        .then(pokemon=>{
            setPokemons(pokemon.results)
            // console.log(pokemon.results)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    return(
        <div>
            <div className="text-xl text-blue-400">{
                pokemons.map((pokemon)=>(
                    <PokemonCard key={pokemon.name} pokemonName={pokemon.name} pokemonURL={pokemon.url}/>
                ))
            }</div>
        </div>
    )
}

export default PokemonList