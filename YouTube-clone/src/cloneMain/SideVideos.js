import React from 'react'

const SideVideos = ({ video, onVideoSelect }) => {
    return (
        <div>
            <div className='videoItems' onClick={() => onVideoSelect(video)}>
                <img src={video.snippet.thumbnails.medium.url} alt="overlay" style={{marginRigh:"20px"}} />
            <div className='titleVideo'>
                <b>{video.snippet.title}</b>
            </div>
            </div> 
        </div>
    )
}

export default SideVideos