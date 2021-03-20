import React, { useState } from 'react'
import './track.css'


const Track = ({track_name, album_name, artist_name, track_rating, track_share_url}) => {
    const [count, setCount] = useState(track_rating);
    console.log(track_name, album_name, artist_name, track_rating)
    return (
        <>
        <div className="tracks">
            <div>
                <h2>{track_name}</h2>
                <p>{artist_name}</p>
                <p>{album_name}</p> 
            </div>
            <div className="ratings">
                <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
                    {count}
                </h1>
                <div className="button__wrapper">
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Track
