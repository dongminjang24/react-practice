/* eslint-build */
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import {Routes,Route,Link,useNavigate,Outlet, Navigate} from 'react-router-dom'
import React from 'react';
import Detail from './components/Detail';
import Main from './main';
import About from './components/About';
import Event from './components/Event';
import Cart from './components/Cart';
import { DATA_SAMPLE } from './data/data';
export let Context1 = React.createContext();

function App() {
  // let obj = {name:'kim'}
  
  // localStorage.setItem('data',JSON.stringify(obj))
  // let item =localStorage.getItem('data')
  // console.log(JSON.parse(item))
  let [stock, setStock] = useState([10,11,12]);

  let [shoes,setShoes] = useState(DATA_SAMPLE)
  let navigate = useNavigate()
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
        </Container>
      </Navbar>
   

           {/* <Button variant="primary">Primary</Button>{' '} */}
      <Routes>
          <Route path='/' element={
           <Main shoes={shoes} setShoes={setShoes}/>
          }/>
          <Route path='/detail/:productId' element={
            <Context1.Provider value={ {stock} }>
              <Detail shoes={shoes}/>
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
          <Route path="/cart" element={ <Cart/> } />  

      </Routes>
    </div>
  );
}

export default App;
