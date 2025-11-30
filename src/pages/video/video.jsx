import React from 'react'
import './video.css'
import Playvideo from '../../components/play video/playvideo'
import Recommended from '../../components/recommended/recommended'
import { useParams } from 'react-router-dom'

const video = () => {
 const {videoId,categoryId}=useParams();
  
 return (
    <div className='play-container'>
      <Playvideo videoId={videoId} />
    <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default video