import React, { useEffect, useState } from 'react';
import List from '../components/List';
import axios from 'axios';
import '../App.css' 




const Main = ({shoes,setShoes}) => {
        const watchedList = JSON.parse(localStorage.getItem('watched'))
        console.log(watchedList)
        const sortShoes =()=>{
            let copyShoes = [...shoes]
            // setShoes(copyShoes.sort())
            let result = copyShoes.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
            setShoes(result)
        }
        const addData =(data)=>{
            let copyShoes = [...shoes,...data]
            setShoes(copyShoes)
        }
        const [cntClick,setCntClick] = useState(2)
        const [err,setErr] = useState(false);
        const [alert,setAlert] = useState(false)
        useEffect(()=>{
            setTimeout(()=>{
                setAlert(false)
            },4000)
         return()=>{
             if (alert === false){setAlert(true)}
         }
         },[cntClick])
    return (
        <>
        <div>
            <div className='main-bg' >
                <div style={{position:'absolute',top:'30%',right:'0'}}>
                    {watchedList.map((v)=>{
                        return(
                        <>
                            <div style={{position:'relative'}}>{v.title}</div>
                            <div style={{position:'relative'}}>{v.content}</div>
                        </>)
                    })}
                  
                </div>
            </div>
        </div>
        {alert ? <p className='centered'>로딩 중입니다.</p>: null}

        <button onClick={sortShoes}>상품 정렬</button>
        <div className="container">
         <div className="container">
           <div className="row">
           {shoes.map((v,i)=>{
               return(<List key={shoes[i].id} id={shoes[i].id} shoes={shoes}></List>)
           })}
           </div>
           {err ? <div style={{color:'red',fontWeight:'bold'}}>더이상 상품이 없습니다.</div>: null}
           <button onClick={()=>{
            setCntClick(cntClick+1)
            const url = 'https://codingapple1.github.io/shop/data'+ cntClick+'.json'
            axios.get(url)
            .then((result)=>{addData(result.data)
                })
            .catch((err)=>{
                setErr(true)
                console.log(err)
            })
            
            // fetch("cafe.com/12")
            // .then(result=>result.json()) //변환과정 필요
            // .then(data=>{})

            // Promise.all([ axios.post('/asdfasfd',data), axios.post('/asdfasfd',{name:'kim'})])
        
           }}>상품 더보기</button>
         </div>
        </div>
        </> 
    );
};

export default Main;