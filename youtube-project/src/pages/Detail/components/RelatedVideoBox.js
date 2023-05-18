import React, { useState } from 'react';
import RELATED_DATA from '../../../data/related.json'
const RelatedVideoBox = () => {
    const [related,setRelated] = useState(RELATED_DATA)
    const relatedList = related.items
    const copyRelatedList = [...related.items]
    copyRelatedList.length =5
    
    return (
        <div  className='grid grid-cols-1 gap-y-3 mx-5'>
            {copyRelatedList.map((one)=>{
                return (
                    <div>
                        <img className='rounded-md' src={one.snippet.thumbnails.medium.url} alt=""/>
                    </div>
                )
            })}
        </div>
    );
};

export default RelatedVideoBox;