import React, { useState } from 'react'
import { Buscador } from './Buscador'
import UserData from './UserData'
import { useUserData } from '../hooks/useUserData'
import { LeagueData } from './LeagueData'
import ChampionsData from './ChampionsData'
import './styles/userpage.css'

export default function UserPage() {
  const [name, setName] = useState(null)

  const { userData, leagueData, champsData } = useUserData(name);

  return (
    <>
      <Buscador setName={setName} />
      <div className='data_container'>

        {
          (userData.loading || leagueData.loading || champsData.loading) && <div className='loading'>
            <div className='spinner'></div>
          </div>
        }

        <div className='userdata_container'>
          {
            userData.data.id
            ? <UserData data={userData.data} />
            : <div></div>
          }
          {
            !leagueData.data[0]
              ? <div></div>
              : <LeagueData data={leagueData.data} />
          }
        </div>
        <div className='championsdata_container'>
          <ChampionsData />
        </div>
      </div>
    </>
  )
}