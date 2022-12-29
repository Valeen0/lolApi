import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useUserData } from '../hooks/useUserData';
import './styles/buscador.css'


export function Buscador({ setState }) {
  const [name, setName] = useState(null);
  const { userData, leagueData, champsData} = useUserData(name);

  console.log(userData);
  console.log(leagueData);
  console.log(champsData);

  const getName = e => {
    e.preventDefault();
    setName(e.target.player.value);
  }

  return (
    <>
      <form onSubmit={getName}>
        <input className='input_text' type="text" autoComplete='off' name='player' placeholder='Buscar jugador' />
        <input type="submit" value="Buscar" />
      </form>
    </>
  );
}