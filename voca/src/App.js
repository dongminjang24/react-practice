/* eslint-disable */
import './App.css';
import { useState } from 'react';
import Modal from './components/Modal';
function App() {
  const [post,setPost] = useState(['남자코트 추천','강남 우동 맛집','파이썬 독학'])
  const [inputValue,setInputValue] =useState('')
  const [like,setLike] = useState(Array(post.length).fill().map(()=>0))
  
  const UpLike=(num)=>{
    let copyLike = [...like]
    copyLike[num] = copyLike[num]+1
    setLike(copyLike)
  }
  const ChgGender=()=>{
    const copyPost = [...post]
    copyPost[0] ="여자코트 추천"
    setPost(copyPost)
  }
  const sortHangeul =()=>{
    let copyPost = [...post]
    copyPost =copyPost.sort()

    setPost(copyPost)
  }
  const [modal,setModal] = useState(false)
  const ChangModal = ()=>{
    setModal(!modal)
  }
  const [postNum,setPostNum] = useState(post[0])
  const deliver = (i)=>{
    setPostNum(post[i])
  
  }
  const addPost = (value)=>{
    let copyPost = [...post]
    copyPost.unshift(value)
    setPost(copyPost)
  }
  const deletePost = (i)=>{
    let copyPost = [...post]
    let deleteArr = copyPost[i]
    const filtered =copyPost.filter((value,index)=>{
      return value !== deleteArr
    })
    setPost(filtered)
  }
  return (
    <div className="App">
      
      <div className='black-nav'>
        <h4 style={{color:'red',fontSize:'16px'}} id={post}>블로그임</h4>
      </div>
      <button onClick={sortHangeul}>가나다순 정렬</button>

      {/* <div className='list'>
        <h4 onClick={ChangModal}>{post[0]}
          <span onClick={UpLike}> 좋아요👍</span> {like} </h4>
          <button onClick={ChgGender}>변경</button>
          <p>2월 17일 발행</p>
      </div> */}
      {/* <div className='list'>
        <h4>{post[0]}</h4>
          <p>2월 17일 발행</p>
      </div>
      <div className='list'>
      <h4>{post[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
    
      <div className='list'>
      <h4>{post[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}
      {
        post.map((aPost,i)=>{
          return(<div key={aPost} className='list'>
          <h4 onClick={()=>{deliver(i); setModal(true);}}>{aPost}
          <span key={aPost} onClick={(e)=>{e.stopPropagation();UpLike(i)}}> 좋아요👍</span> {like[i]} </h4>
            <p>2월 17일 발행
            <button onClick={()=>{deletePost(i)}} style={{display: 'inline'}}>삭제</button>
            </p>
          </div> )
        })
      }
      
      <input onChange={(e)=>{setInputValue(e.target.value)}}/>
      <button onClick={()=>{addPost(inputValue)}}>추가</button>

      {
        modal ? <Modal post={postNum} ChgGender={ChgGender}/> : null
      }
    </div>
  );
}

export default App;

// class Modal2 extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       name : 'kim',
//       age : 20
//     }
//   }

//   render(){
//     return (
//       <div>안녕 { this.props.프롭스이름 }</div>
//     )
//   }

// }
