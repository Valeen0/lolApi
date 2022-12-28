import { useEffect, useState } from 'react' 
import { getFetch } from '../services/getFetch'
import allChampionsData from '../assets/champions.json'

export default function useChampsData (id) {
  const [champsData, setData] = useState({
    loading: false,
    data: {},
    error: null,
  })

  const championsData = Object.entries(allChampionsData.data)
  const url = `https://la2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${import.meta.env.VITE_API_KEY}`


  useEffect(() => {

    if (!id) return

    setData({ loading: true, data: {}, error: null })
    getFetch(url)
    .then( (championMetaData) => {
      const help = championMetaData.slice(0,5)

      championsData.map(([_, champ]) => {

        help.find( ({ championId }) => {
          if (championId === parseInt(champ.key)) {
            console.log(championId, champ)
          }
        })

      })
    })
    .catch(err => setData({ loading: false, data: {}, error: err }))

  }, [id])

  useEffect

  

}