import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './styles/buscador.css';

export function Buscador() {

    const [name, setName] = useState();

    const getName = ev =>{
        ev.preventDefault();
        const name = ev.target.player.value;

        setName(name);
        
    }

    useEffect(()=>{

        

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
