import React,{useState} from 'react';
import '../../../../src/App.css';

const VideoBox = ({id}) => {


    return (
        <div>
        <div className="video-container">
                <iframe width="560" height="315" src={'https://www.youtube.com/embed/'+id[0].id.videoId+"?autoplay=1"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen auto></iframe>
            </div>
            <div className='text-lg font-semibold'>{id[0].snippet.title}</div>
            <div className='text-md font-semibold'>{id[0].snippet.channelTitle}</div>
            <div className='text-md font-semibold rounded-lg py-3 px-2' style={{backgroundColor:'rgba(0, 0, 0, 0.05)'}}>{id[0].snippet.description}</div>
        </div>
    );
};

export default VideoBox;