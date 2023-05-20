import React from 'react';
import { useLocation,useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/videoCard/videoCard';
const Search = () => {
    const location = useLocation();
    const { query } = useParams();
    const {isLoading,error,data:videos} = useQuery(
        ['videos',query],async ()=>{
            return fetch(`/videos/${query? 'search' : 'popular'}.json`)
            .then(res=> res.json())
            .then(data=>data.items)
        }
    )
    ; 
    console.log(query)
    // useEffect(() => {
    //     // console.log(location.pathname.split('/').slice(-1)[0]);
    //   }, [ location ])
    return (
        <div>
            
            Videos{query? `🔍${query}`: '🔥'}
            {isLoading && <p>Loading...</p>}
            {error&& <p>Something is wrong</p>}
            {videos&&<ul>
                {videos.map((video)=>(
                    <VideoCard key={video.id} video={video}></VideoCard>
                ))}
                </ul>}
        </div>
    );
};

export default Search;