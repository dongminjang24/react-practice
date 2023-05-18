import React,{useState} from 'react';
// import logo from './youtube_logo'
import SearchBtn from '../../../icons/search_btn'
import Mike from '../../../icons/mike';
import VideoPlus from '../../../icons/video_plus';
import Alarm from '../../../icons/bell';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    let navigate = useNavigate()

    const [input,setInput] = useState()
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/results?search_query=${input}`);
      };

    return (
        <div className='flex grid grid-cols-6 gap-4 mb-12 sticky top-0 bg-white cursor-pointer'>
            <div onClick={()=>{
            navigate('/')

            }} className='pr-[16px]'>
                <img src="./youtube_logo.png" width={110}/>
             </div>
             <div className='flex items-center justify-center col-span-4'>
                <form onSubmit={(e)=>{handleSubmit(e)}}  method="GET"  action="/results" className='block flex items-center justify-center'>
                    <div className=' flex items-center justify-center  border rounded-l-[40px]'>
                        <div className='min-w-[240px] relative pl-[16px] pr-[4px] max-w-full'>
                            <input 
                            value={input}
                            onChange={(e)=>{
                                setInput(e.target.value)
                            }} type="text" style={{border: 'none', padding: '0px', margin: '0px', height: 'auto', width: '100%', outline: 'none'}} placeholder='검색'/>
                        </div>
                    </div>
                    <button className='max-w-[64px] max-h-[40px] bg-[#F8F8F8]'>
                        <SearchBtn></SearchBtn>
                    </button>
                </form>
                <div className='w-[24px] h-[24px]'>
                    <Mike ></Mike>
                </div>
             </div>
             <div className='flex justify-end items-center max-w-[156px] max-h-[40px]'>
                <div className='w-[24px] h-[24px]'>
                    <VideoPlus></VideoPlus>
                </div>
                <div className='w-[24px] h-[24px]'>
                    <Alarm></Alarm>
                </div>
                <div>

                </div>
             </div>
        </div>
    );
};

export default Header;