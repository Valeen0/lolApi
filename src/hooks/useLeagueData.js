import { useEffect, useState } from 'react' 
import { getFetch } from '../services/getFetch'

export function useLeagueData (id) {
  const [leagueData, setData] = useState({
    loading: false,
    data: {},
    error: null,
  })

  const url = `https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${import.meta.env.VITE_API_KEY}`

  useEffect(() => {

    if (!id) return
    
    setData({ loading: true })
    getFetch(url)
    .then(json => setData({ loading: false, data: json, error: null }))
    .catch(err => setData({ loading: false, data: {}, error: err }))

  }, [id])

  return { leagueData }

}