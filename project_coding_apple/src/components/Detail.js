import React, { useEffect,useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Tab from './Tab';
import {Context1} from '../App';
import { addCart } from '../Redux/store';
import { useDispatch } from 'react-redux';
let Box = styled.div`
  padding : 20px;
  color : grey
`;
let YellowBtn = styled.button`
background: ${(props) => props.bg};
color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px;
`;

  
const Detail = ({shoes}) => {
    let dispatch = useDispatch()
    let {stock} = useContext(Context1)

    // const [num,setNum] =useState(0)\
    
    const [num,setNum] =useState(0)
    const  [alert,setAlert] = useState(true)
   
    useEffect(()=>{
       let a= setTimeout(()=>{
            setAlert(false)
        },2000)
    return()=>{
        // if (alert === false){setAlert(true)}
        clearTimeout(a)
    }
    },[num])

    const [animate,setAnimate] = useState('')
   useEffect(()=>{
    setTimeout(()=>{
        setAnimate('end')
    },100)
    return()=>{
    setAnimate('')}
   }
   ,[])
   let {productId} = useParams()
   useEffect(() => {
  const shoe = shoes.find((obj) => obj["id"] === parseInt(productId));

  if (localStorage.getItem("watched") === null) {
    localStorage.setItem("watched", JSON.stringify([]));
    let old_data = JSON.parse(localStorage.getItem("watched"));
    old_data.unshift(shoe); // 수정된 부분

    let new_data =  old_data.filter((item, i) => {
        return (
            old_data.findIndex((item2, j) => {
            return item.id === item2.id;
            }) === i
        );
        });

    localStorage.setItem("watched", JSON.stringify(new_data));
  } else {
    let old_data = JSON.parse(localStorage.getItem("watched"));
    console.log(JSON.stringify(shoe.title));
    old_data.unshift(shoe); // 수정된 부분
    let new_data =  old_data.filter((item, i) => {
        return (
            old_data.findIndex((item2, j) => {
            return item.id === item2.id;
            }) === i
        );
        });

    localStorage.setItem("watched", JSON.stringify(new_data));
  }
}, []);
   
  

    const shoe = shoes.find((obj) => obj['id'] === parseInt(productId));
    const [count,setCount] = useState(0)
    const [alertInput , setAlertInput] =useState(false)
    const [tab,setTab] = useState(0)
    let urlId = parseInt(productId)+1
    useEffect(()=>{
        if  (isNaN(count)){
            setAlertInput(true)
        }else(
            setAlertInput(false)
        )
        
    })
    return (
        <div className={`container start ${animate}`}>
            {alert ? <div className="alert alert-warning">2초이내 구매시 할인</div>:null}
            <button onClick={()=>{setNum(num+1)}}>숫자 {num}</button>
            <Box>
                <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
                <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
            </Box>
            <div className="row">
                <div className="col-md-6">
                <img src={"https://codingapple1.github.io/shop/shoes"+urlId+".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                {alertInput ? <div style={{color:'red'}}>숫자를 입력하세요</div>:null}
                <label htmlFor='count'>수량 입력란</label> 
                <input id="count" type="text" onInput={(e)=>{setCount(e.target.value)}}></input>
                <h4 className="pt-5">{shoe.title}</h4>
                <p>{shoe.content}</p>
                <p>{shoe.price}원</p>
                <button onClick={()=>{dispatch(addCart(shoe))}} className="btn btn-danger">주문하기</button> 
                </div>
            </div>
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(1)}}  eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(2)}}  eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            {/* { tab ===0 ? <div>내용0</div>
            :(
                tab ===1 ? <div>내용1</div>:<div>내용2</div> 
            )} */}
            <Tab tab={tab} shoes={shoes}></Tab>
            
        </div> 
    );
};


export default Detail;