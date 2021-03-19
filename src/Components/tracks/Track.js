import React, { useState } from 'react'
import './track.css'


const Track = ({title, artist, year, img_url}) => {
    const [count, setCount] = useState(10);

    return (
        <>
        <div className="tracks">
            <div>
                <h2>{title}</h2>
                <p>{artist}</p>
                <p>{year}</p> 
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
