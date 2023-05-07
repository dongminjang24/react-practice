import React from 'react';
import { Table } from 'react-bootstrap' 
import { useDispatch, useSelector } from 'react-redux';
import { changeName1,increaseAge,increaseCount,deleteCount } from '../Redux/store';
const Cart = () => {

    let state = useSelector((state)=> state.user)
    let cartData = useSelector((state)=>{return state.cartData})
    let dispatch = useDispatch()
    return (
        <div>
            <h1>{state.name} {state.age}의 장바구니</h1>
            <button onClick={()=>dispatch(increaseAge())}>버튼</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (cartData).map((v,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{v.id}</td>
                                    <td>{v.name}</td>
                                    <td>{v.count}</td>
                                    <td>
                                    <button onClick={() => dispatch(increaseCount(v.id))}>+</button></td>
                                    <td>
                                    <button onClick={() => dispatch(deleteCount(v.id))}>+</button></td>
                                </tr>
                            )
                        })
                    }
                    {/* <tr>
                        <td>{cartData[0].id}</td>
                        <td>{cartData[0].name}</td>
                        <td>{cartData[0].count}</td>
                        <td>안녕</td>
                    </tr>
                    <tr>
                        <td>{cartData[1].id}</td>
                        <td>{cartData[1].name}</td>
                        <td>{cartData[1].count}</td>
                        <td>안녕</td>
                    </tr> */}
                </tbody>
            </Table> 
        </div>
    );
};

export default Cart;