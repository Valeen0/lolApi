import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
<<<<<<< HEAD
import { useData } from '../hooks/useData';

const protocol = "https://";
const region = "la2.api.riotgames.com";
const summEndPoint = "/lol/summoner/v4/summoners/by-name/"

export function Buscador() {
=======
import { getFetch } from '../services/getFetch';

// import meta.env.VITE_API_KEY;
>>>>>>> master

export function Buscador({setState}) {
    
    const [name, setName] = useState();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

<<<<<<< HEAD
    const data = useData(`${protocol}${region}${summEndPoint}${name}?api_key=${import.meta.env.VITE_API_KEY}`)


    const getName = ev =>{
        ev.preventDefault();
        const name = ev.target.player.value;

        setName(name);
    }

=======
    const url = `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${import.meta.env.VITE_API_KEY}`;

    const getName = e =>{
        e.preventDefault();
        setName(e.target.player.value);
    }

    useEffect(()=>{

        if(!name) return;

        setLoading(true)
        getFetch(url)
        .then(json=> console.log(json))
        .catch(err => {
            setError(err)
        })
        .finally(()=>setLoading(false))      
        

    },[name]);
    

>>>>>>> master
    return(
        <>
            <form onSubmit={getName}>
                <input className='' type="text" autoComplete='off' name='player' placeholder='Buscar jugador'/>
                <input type="submit" value="Buscar" />
            </form>
        </>
    );
}
