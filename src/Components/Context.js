import React, { useEffect, useState } from 'react'
import axios from 'axios'
import data from '../data'

export const Context = React.createContext();

// const URL = 'http://api.musixmatch.com/ws/1.1/tracking.url.get?apikey=1ed3a87eafb5901da54301970155ff73&format=json&domain=http://localhost:3000/'


const ContextProvider = (props) => {

    const [trackList, setTrackList] = useState(data);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://api.musixmatch.com/ws/1.1/chart.tracks.get?
                page=1&page_size=10&country=us&f_has_lyrics=1&
                apikey=${process.env.API_KEY}`
            );
            console.log(response)
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Context.Provider value={[trackList, setTrackList]}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
