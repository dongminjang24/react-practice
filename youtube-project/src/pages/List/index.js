import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';
import RELATED_DATA  from '../../data/related.json'
import OneListCard from './components/oneListCard';
const List = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search_query');
    const [listData,setData] = useState(RELATED_DATA)
    const [showResult,setShowResult] = useState([])
    // console.log(listData.items[0].snippet.channelTitle)
    // console.log(listData.items[0].snippet.title)
    // console.log(listData.items[0].snippet.description)
    // 1. 검색해서 나오는 순을 리스트안에 집어넣는다. (무엇을? 비디오id를 리스트에 넣어줌)
    // 2. 넣은 비디오 id를 바탕으로 썸네일을꺼내온다.
    // 3. 리스트 안에 집어 넣은 것들의 썸네일을 보여준다.
    // const search_title_data = listData.items.filter(
    //     (v)=>{if((v.snippet.title || v.snippet.channelTitle || v.snippet.description).toLowerCase().includes(searchQuery.toString().toLowerCase())  === true) {return v.id.videoId}}
    // )
    // const search_channel_title_data = listData.items.filter(
    //     (v)=>{if(v.snippet.channelTitle.toLowerCase().includes(searchQuery.toString().toLowerCase())  === true) return v.id.videoId}
    // )
    // const search_description_data = listData.items.filter(
    //     (v)=>{if(v.snippet.description.toLowerCase().includes(searchQuery.toString().toLowerCase())  === true) return v.id.videoId}
    // )
    // const filterResult = search_title_data.concat(search_channel_title_data,search_description_data)
    const search_title_data = listData.items.filter(v => 
        (v.snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        v.snippet.channelTitle.toLowerCase().includes(searchQuery.toLowerCase()) || 
        v.snippet.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )

    // console.log(search_title_data[0].snippet.thumbnails.medium.url)
    console.log(search_title_data)
    return (
        <div>
            { search_title_data.length == 0 ?
            <div className='w-[100vw] text-center mx-auto'>검색 결과가 없습니다.</div> : 
            <ul  className='grid grid-cols-1 gap-y-3 min-w-[800px]'>

            {search_title_data.map((list)=>{
                return(
                    <OneListCard list={list}></OneListCard>
                )
            })}
            </ul>
            }
        </div>
    );
};

export default List;