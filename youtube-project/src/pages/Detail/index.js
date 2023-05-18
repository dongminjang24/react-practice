import React,{useState} from 'react';
import VideoBox from './components/DetailVideoBox';
import { useParams,useSearchParams,useLocation } from "react-router-dom"
import LIST_DATA from '../../data/list.json'
import RelatedVideoBox from './components/RelatedVideoBox';
const Detail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const videoId = queryParams.get('v');
    const [Videos,ListVideo] = useState(LIST_DATA[0]["items"])

    const id = Videos.filter((videoNum)=> videoNum.id.videoId === videoId)
    console.log(id[0].id.videoId)
    return (
        <div className='flex'>
           <VideoBox id={id}></VideoBox>
           <RelatedVideoBox></RelatedVideoBox>
        </div>
    );
};

export default Detail;