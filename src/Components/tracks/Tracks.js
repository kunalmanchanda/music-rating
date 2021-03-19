import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import Track from './Track'

const Tracks = (props) => {
    console.log(props)
    const {track} = props
    return (
        <>
            {
                track.map(t => {
                    return (
                        <Track key= {uuidv4()} {...t}/>
                    )
                })
            }
        </>
    )
}

export default Tracks
