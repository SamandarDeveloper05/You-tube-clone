import React,{ useState } from 'react'
import Search from './cloneMain/Search';
import './Design.css'
import URL from './cloneMain/api/URL'
import Video from './cloneMain/Video';
import ListVideos from './cloneMain/ListVideos';
const App = () => {
    const [videos , setVideos] = useState([]);
    const [selectedVideos, setSelectedVides] = useState({ id : {}, snippet: {}});

    async function videoSubmit(searchTerm) {
    const {data: {items: videos} } = await URL.get("search", {
      params:{
       part: 'snippet',
       maxResults:10,
       key:"AIzaSyBc7te8x94XzA4pV1qOAFgF-16oGZBnM-Y",
       q:searchTerm
      }
    });
    console.log(videos);
    setVideos(videos);
    setSelectedVides(videos[0]);

      }
  

  return (
    <>
    <div className='headerTop'>


   <div className='searchSec'>
      <Search onSubmit={videoSubmit}/>
   </div>
   <div className='videoMain'>
     <div className='videoSec'>
       <Video video={selectedVideos}/>
     </div>
     <div className='videoLists'>
       <ListVideos videos={videos} onVideoSelect={setSelectedVides}/>
     </div>
   </div>
   </div>``
    </>
  )
}

export default App