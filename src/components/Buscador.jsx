import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useData } from '../hooks/useData';

const protocol = "https://";
const region = "la2.api.riotgames.com";
const summEndPoint = "/lol/summoner/v4/summoners/by-name/"

export function Buscador() {

    const [name, setName] = useState();

    const data = useData(`${protocol}${region}${summEndPoint}${name}?api_key=${import.meta.env.VITE_API_KEY}`)


    const getName = ev =>{
        ev.preventDefault();
        const name = ev.target.player.value;

        setName(name);
    }

    return(
        <>
            <form onSubmit={getName}>
                <input className='' type="text" autoComplete='off' name='player' placeholder='Buscar jugador'/>
                <input type="submit" value="Buscar" />
            </form>
        </>
    );
}
