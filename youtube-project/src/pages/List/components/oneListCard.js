import React from 'react';
import { useNavigate } from 'react-router-dom';
const OneListCard = ({list}) => {

    let navigate = useNavigate()
    let VideoId = list.id.videoId
    // console.log(list.id.videoId)
    return (
        <li onClick={()=>{
            navigate('/watch?v='+VideoId)
        }}>
            <div>
                <div className='flex mx-auto px-3'>
                    <img className='rounded-md' src={list.snippet.thumbnails.medium.url} alt=""/>
                    <div className='font-[500] text-lg ml-4'>
                        {list.snippet.title}
                        <div className='font-[400] text-sm'>
                            {list.snippet.channelTitle}
                        </div>
                        <div className='font-[400] text-sm'>
                            {list.snippet.description.slice(0,100) + "..."}
                        </div>
                    </div>
                    
                </div>
            </div>
        </li>
    );
};

export default OneListCard;