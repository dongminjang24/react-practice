/* eslint-build */
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useState,lazy,Suspense } from 'react';
import {Routes,Route,Link,useNavigate,Outlet, Navigate} from 'react-router-dom'
import React from 'react';
// import Detail from './components/Detail';
import Main from './main';
import About from './components/About';
import Event from './components/Event';
// import Cart from './components/Cart';
import { DATA_SAMPLE } from './data/data';
import { useQuery } from 'react-query';
import axios from 'axios';
const Detail = lazy(()=> import('./components/Detail'))

const Cart  = lazy(()=> import('./components/Cart'))
export let Context1 = React.createContext();

function App() {
  // let obj = {name:'kim'}
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(20);
  // localStorage.setItem('data',JSON.stringify(obj))
  // let item =localStorage.getItem('data')
  // console.log(JSON.parse(item))
  let [stock, setStock] = useState([10,11,12]);

  let [shoes,setShoes] = useState(DATA_SAMPLE)
  let navigate = useNavigate()
  // axios.get('https://codinapple1.github.io/userdata.json').then((res)=>{

  // console.log(res.data)
  // })

  let result = useQuery(['react-data'],()=>{
   return axios.get('https://codingapple1.github.io/userdata.json').then((res)=>{
  console.log('요청됨')
    return  res.data
  }),
  {staleTime : 2000} //1초 안에는 리패치가 되지 않습니다.
  })

/* result.data
result.isLoading
result.error */

  return (
    <div className="App">
    
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DongMin</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to='/'>홈</Link>
            <Link to='/detail'>상세페이지</Link> */}
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/1')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>카트</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            {/* {result.isLoading ? '로딩중':result.data.name } */}
            {result.isLoading && '로딩중'}
            {result.error && '에러남'}
            {result.data && result.data.name}
            {/* 반가워요 KIM */}
          </Nav>
        </Container>
      </Navbar>
   

           {/* <Button variant="primary">Primary</Button>{' '} */}
      <Routes>
          <Route path='/' element={
           <Main shoes={shoes} setShoes={setShoes}/>
          }/>
          <Route path='/detail/:productId' element={
            <Context1.Provider value={ {stock} }>
            <Suspense fallback={<div>로딩중</div>}>
                <Detail shoes={shoes}/>
              </Suspense>
            </Context1.Provider>
          }/>
          <Route path="*" element={<div>없는 페이지 입니다.</div>}/>
          <Route path="/about" element={ <About/> } >  
            <Route path="member" element={ <div>멤버들</div> } />
            <Route path="location" element={ <div>회사위치</div> } />
          </Route>
          <Route path="/event" element={ <Event/> } >  
            <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
            <Route path="two" element={ <div>생일기념 쿠폰받기</div> } />
          </Route>
          <Route path="/cart" element={ 
            <Suspense fallback={<div>로딩중</div>}>
              <Cart/> 
            </Suspense>

          } />  

      </Routes>
    </div>
  );
}

export default App;
