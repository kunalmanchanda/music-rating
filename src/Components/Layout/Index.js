import React, { useContext } from 'react'
import Tracks from '../tracks/Tracks'
import { Context } from '../Context'

const Index = () => {
    const [trackList, setTrackList, loading, setLoading] = useContext(Context)
    // console.log(loading, trackList)
    return (
        <>
        {
            loading ? (
            <Tracks track={trackList}/>            
            ) : (loading)
        }
        </>
    )
}

export default Index
