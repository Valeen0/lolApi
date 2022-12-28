import { useState, useEffect } from 'react';


export function useData(url){
    
    const [data, setData] = useState({});

    useEffect(()=>{

        const doFetch = async url =>{
          console.log('fetched')

            let res = await fetch(url); 
            let data = await res.json();

            setData(data);

        }
        doFetch(url);

    },[url]);

    return data;
    
}

