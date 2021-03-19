import React from 'react'

const Tracks = (props) => {
    // console.log(props.track)
    const {track} = props
    return (
        <div>
            tracks
            {
                track.map(t => {
                    return (
                        <h2 key = {t.id}>
                            {t.track_name}
                        </h2>
                    )
                })
            }
        </div>
    )
}

export default Tracks
