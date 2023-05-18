import React,{useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const VideoBox = ({Video}) => {
    // 이미지,타이틀, 시간, 조회수
    const getDateDiff = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  
  const diffDate = date1.getTime() - date2.getTime();
  const diff = Math.floor(diffDate / (1000 * 60 * 60 * 24))
  if (diff<1) {
    return diff*24+"시간전"}
  if (diff<7) {
    return diff+"일전"}
  if (diff<30) {
    return Math.floor(diff / 4) + "주전"}
  if (diff<365) {
    return Math.floor(diff / 30) + "개월전"}
  if (diff>365) {
    return Math.floor(diff / 365) + "년전"}
}

    let now = new Date();
    let postDate = new Date(Video.snippet.publishTime);
    let navigate = useNavigate()
    let VideoId = Video.id.videoId
    console.log(VideoId)
    return (
        <div onClick={()=>{
            navigate('/watch?v='+VideoId)
        }}>
            <img className='rounded-lg' src={Video.snippet.thumbnails.medium.url} alt=""/>
            <div>
                {Video.snippet.title}
            </div>
            <div style={{color:'rgb(90,90,90)'}} className='text-sm'>
                {Video.snippet.channelTitle}
            </div>
            <div style={{color:'rgb(90,90,90)'}} className='text-sm'>
                {getDateDiff(now,postDate)}
            </div>
        </div>
    );
};

export default VideoBox;