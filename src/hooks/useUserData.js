import { useEffect, useState } from "react";
import { getFetch } from "../services/getFetch";
import useChampsData from "./useChampsData";
import { useLeagueData } from "./useLeagueData";


export function useUserData(name) {
  const [userData, setData] = useState({
    loading: false,
    error: null,
    data: {},
  })

  const { leagueData } = useLeagueData(userData.data.id)
  useChampsData(userData.data.id)

  const url = `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {

    if (!name) return;

    setData({ loading: true, data: {}, error: null })
    getFetch(url)
      .then(json => setData({ loading: false, data: json, error: null }))
      .catch(err => setData({ loading: false, data: {}, error: err }))

  }, [name]);

  return { userData, leagueData }
}