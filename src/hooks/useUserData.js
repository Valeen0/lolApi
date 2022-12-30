import { useEffect, useState } from "react";
import { getFetch } from "../services/getFetch";
import useChampsData from "./useChampsData";
import { useLeagueData } from "./useLeagueData";
import { protocol, region, endpoints } from '../assets/endPoints.json'

export function useUserData(name) {

  const [userData, setData] = useState({
    loading: false,
    data: {},
    error: null,
  });

  const { leagueData } = useLeagueData(userData.data.id);
  const { champsData }  = useChampsData(userData.data.id);
  const url = `${protocol}${region[1]}${endpoints.summoner}${name}?api_key=${import.meta.env.VITE_API_KEY}`

  useEffect(()=> {
    if(!name) return;

    setData({ loading: true, data: {}, error: null })
    getUserData(url);

  }, [name]);

  const getUserData = async url =>{

    try {
      let data = await getFetch(url);

      setData({
        loading: false,
        data: {
          id:data.id,
          name: data.name,
          level: data.summonerLevel,
          profileIcon: `http://ddragon.leagueoflegends.com/cdn/12.23.1/img/profileicon/${data.profileIconId}.png`,
        },
        error: null
      });

    } catch (error) {
      setData({ loading: false, data: {}, error})
    }
  }

  return { userData, leagueData, champsData };
}