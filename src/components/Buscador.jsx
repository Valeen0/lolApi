import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useData } from '../hooks/useData';
import './styles/buscador.css';

const apiKey ="RGAPI-3c486d65-3f5b-4c7b-b653-98a6a0c62560";
const protocol = "https://";
const region = "la2.api.riotgames.com";
const summEndPoint = "/lol/summoner/v4/summoners/by-name/"

export function Buscador() {

    const [name, setName] = useState();

    const data = useData(`${protocol}${region}${summEndPoint}${name}?ap i_key=${apiKey}`)


    const getName = ev =>{
        ev.preventDefault();
        const name = ev.target.player.value;

        setName(name);
        
    }

    useEffect(()=>{
        
        console.log(data)

    },[name])
    

    return(
        <>
            <form onSubmit={getName}>
                <input className='input_text' type="text" autoComplete='off' name='player' placeholder='Buscar jugador'/>
                <input type="submit" value="Buscar" />
            </form>
        </>
    );
}
