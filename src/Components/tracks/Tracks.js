import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import './tracks.css'
import Track from './Track'

const Tracks = (props) => {
    // console.log(props)
    const {track} = props
    console.log(track)
    return (
        <>
        <div>
            <div className="number">
                <p>Top {track.length} Songs</p>
            </div>
            {
                track.map(t => {
                    return (
                        <Track key= {uuidv4()} {...t.track}/>
                    )
                })
            }
        </div>
        </>
    )
}

export default Tracks
