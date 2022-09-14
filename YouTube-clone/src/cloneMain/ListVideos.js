import React from 'react'
import SideVideos from './SideVideos'

const ListVideos = ({videos , onVideoSelect}) => {// ong tarafdan chiqadgon videolar
    const videoLists = videos.map(video => (
        <SideVideos
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
        
        />
    ));
  return (
    <div className='videoLists'>
        {videoLists}
    </div>
  )
}

export default ListVideos