import React from 'react';
import { useState } from 'react';
import { useUserData } from '../hooks/useUserData';


export function Buscador({ setState }) {
  const [name, setName] = useState();

  const getName = e => {
    e.preventDefault();
    setName(e.target.player.value);
  }

  const { userData, leagueData } = useUserData(name)

  return (
    <>
      <form onSubmit={getName}>
        <input className='input_text' type="text" autoComplete='off' name='player' placeholder='Buscar jugador' />
        <input type="submit" value="Buscar" />
      </form>
    </>
  );
}