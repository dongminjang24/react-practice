import React, { useState } from 'react';
import '../App.css'
const Modal = (props) => {
    return (
        <div className='modal'>
        <h4>{props.post}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={props.ChgGender}>글수정</button>
      </div>
    );
};

export default Modal;