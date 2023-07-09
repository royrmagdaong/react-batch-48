import { useState, useEffect } from "react"

function PokemonCard({pokemonName, pokemonURL}){
    const [image, setImage] = useState('/test')
    const [types, setTypes] = useState([])

    useEffect(()=>{
        console.log('Fetch Pokemon Details')
        fetch(pokemonURL)
        .then(res => res.json())
        .then(pokemonDetails=>{
            console.log(pokemonDetails)
            setImage(pokemonDetails.sprites.other['official-artwork'].front_default)
            setTypes(pokemonDetails.types)
            console.log(pokemonDetails.types)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])

    return(
        <div className="drop-shadow-md my-4 ml-6">
            <div>{ pokemonName }</div>
            <img src={image} style={{width: '240px', height: '240px'}} />
            {
                types.map((type)=>(
                    <span key={type.url} className="mr-2 text-gray-600">{type.type.name}</span>
                ))
            }
        </div>
    )
}

export default PokemonCard