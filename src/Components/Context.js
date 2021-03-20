import React, { useEffect, useState } from 'react'

import axios from 'axios'
import dotenv from  'dotenv';
dotenv.config()

export const Context = React.createContext();

// const URL = 'http://api.musixmatch.com/ws/1.1/tracking.url.get?apikey=1ed3a87eafb5901da54301970155ff73&format=json&domain=http://localhost:3000/'


const ContextProvider = (props) => {
    const [trackList, setTrackList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=20&country=us&f_has_lyrics=1&apikey=0451e46178495e97a544962292b809ac`
                // `http://api.musixmatch.com/ws/1.1/chart.tracks.get?
                // page=1&page_size=21&country=us&f_has_lyrics=1&
                // apikey=1ed3a87eafb5901da54301970155ff73`
            );
            // console.log(response.data.message.body.track_list);
            const res = await response.data.message.body.track_list
            setTrackList(res)
            setLoading(true)
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Context.Provider value={[trackList, setTrackList, loading, setLoading]}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;
