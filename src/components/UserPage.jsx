import React from 'react' 
import { Buscador } from './Buscador'
import UserData from './UserData'

export default function UserPage () {
  console.log(window.location.pathname)
  
  return (
    <>
    <Buscador />

    <UserData />
    </>
  )
}