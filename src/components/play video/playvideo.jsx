import React, { useEffect, useState } from 'react'
import './playvideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY } from '../../data'
import { value_convertor } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const playvideo = () => {
    const {videoId}=useParams();
  const[apiData,setApiData]=useState(null);
  const [channelData,setChannelData]=useState(null);
  const [commentData,setCommentData]=useState([]);


  const fetchVideoData= async () => {
    const videoDetails_url=` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videoDetails_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));
  }
 

const fetchOtherData= async () => {
    const channelData_url=` https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url).then(res=>res.json()).then(data=>setChannelData(data.items[0]));

const comment_url=` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
 await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))

}


useEffect(()=>
{
fetchVideoData();
},[videoId])

useEffect(()=>{
fetchOtherData();
},[apiData])

    return (
        
    <div className='play-video'>
        
        {/* <video src={video1} controls autoPlay muted></video> */}
       <iframe
  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&playsinline=1&enablejsapi=1&rel=0`}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  title="YouTube video"
  loading="eager"
></iframe>
     
         <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
       <div className="play-video-info">
        <p>
           {apiData?value_convertor(apiData.statistics.viewCount):"16 k"} views &bull;{apiData? moment(apiData.snippet.publishedAt).fromNow():"2 days ago"}
        </p>
        <div>
            <span>
                <img src={like} alt="" />
               {apiData?value_convertor(apiData.statistics.likeCount):"no likes"}
            </span>
             <span>
                <img src={dislike} alt="" />
                
            </span>
             <span>
                <img src={share} alt="" />
                share
            </span>
             <span>
                <img src={save} alt="" />
                save
            </span>
        </div>
       </div>
       <hr />
       <div className="publisher">
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="no image" />
        <div><p>
           {apiData?apiData.snippet.channelTitle:""}
            </p>
            <span>
                {channelData?value_convertor(channelData.statistics.subscriberCount):'1M'} subscribers
                </span>
                </div>
                <button>
                    subscribe
                </button>
       </div>
       
       <div className="des">
<p>
   {apiData?apiData.snippet.description.slice(0,250):"nothing at here"}
</p>
<hr />
<h4>
   {apiData?value_convertor(apiData.statistics.commentCount):"no comments"} comments
    </h4>    
{commentData.map((item,index)=>
{
    
    return(
 <div key={index} className="comment">
        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="no image" />
        <div>
            <h3> {item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
            <p>
               {item.snippet.topLevelComment.snippet.textDisplay} 
            </p>
            <div className="comment-action">
                <img src={like} alt="" />
                <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                 <img src={dislike} alt="" />
                <span>3</span>
            </div>
        </div>
    </div>
)})}

    
       </div>

        </div>
  )
}

export default playvideo