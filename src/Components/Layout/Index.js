import React, { useContext } from 'react'
import Tracks from '../tracks/Tracks'
import { Context } from '../Context'

const Index = () => {
    const [track, setTrack] = useContext(Context)
    // console.log(track)
    return (
        <>
            <Tracks track={track}/>            
        </>
    )
}

export default Index
