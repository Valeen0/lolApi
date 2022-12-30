import React from 'react';
import './styles/buscador.css'


export function Buscador({ setName }) {
  const getName = e => {
    e.preventDefault();
    setName(e.target.player.value);
  }

  return (
    <>
      <form onSubmit={getName} className='search_form'>
        <input className='input_text' type="text" autoComplete='off' name='player' placeholder='Buscar jugador' />
        <input type="submit" value="Buscar" />
      </form>
    </>
  );
}