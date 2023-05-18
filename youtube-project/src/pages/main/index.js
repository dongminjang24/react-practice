import React,{useState} from 'react';
import VideoBox from './VideoBox/video_box';
import LIST_DATA from '../../data/list.json'

const MainPage = () => {
    
    const [Videos,ListVideo] = useState(LIST_DATA[0]["items"])
    return (
        <div className="px-8">
            <ul  className="flex grid grid-cols-4 gap-x-3 gap-y-14">
            {Videos.map((Video)=>{
                return (
                <li>
                <VideoBox Video={Video}></VideoBox>
                </li>
            )
            
        
            })}</ul>
        </div>
    );
};

export default MainPage;