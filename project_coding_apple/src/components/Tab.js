import React, { useEffect, useState,useContext } from 'react';
import {Context1} from '../App';

const  Tab = ({tab,shoes}) => {
    const [animate,setAnimate] = useState('')
   useEffect(()=>{
    setTimeout(()=>{
        setAnimate('end')
    },100)
    return()=>{
    setAnimate('')}
   }
   ,[tab])
   let {stock} = useContext(Context1)
    
    // if (tab===0) return <div className="start end">내용0</div>
    // if (tab===1) return <div>내용1</div>
    // if (tab===2) return <div>내용2</div>
    return(
        <div className={`start  ${animate}`}>
            {[<div>{shoes[0].title}</div>,<div>{stock[0]}</div>,<div>내용2</div>][tab]}
        </div >
    )

};

export default  Tab;