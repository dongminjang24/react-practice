import { configureStore,createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name:"user",
    initialState:{name:'yes' ,age:29},
    reducers:{
      changeName1(state){
        let copyState = {...state}
        copyState.name ='dong'
        return copyState
      },
      increaseAge(state){
        let copyState = {...state}
        copyState.age = copyState.age + 1
        return copyState
      },
      //함수 밑에 더 만들 수 있음.
    }
})

export let {changeName1,increaseAge}=user.actions

let cartData = createSlice({
    name:"cartData",
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ] ,
      reducers:{
        increaseCount(state, action){
          // console.log(action.payload)
          let index = state.findIndex((it) => it.id === action.payload);
          if (index !== -1) {
            console.log(state[index])
            state[index].count += 1;
          }
          return state
         
        },
      addCart(state,action){
        console.log(action.payload)
        // let index = state.findIndex((it) => it.id === action.payload);
        let index = state.findIndex(e => e.id === action.payload.id);
        if (index === -1) {
          state.push({id:action.payload.id,name : action.payload.title, count : 1})
        }else{
          state[index].count += 1;
        }
        return state
      },deleteCount(state, action){
        // console.log(action.payload)
        // let index = state.findIndex((it) => it.id === action.payload);
        // if (index !== -1) {
        //   console.log(state[index])
        //   state[index].count += 1;
        // }

        state.forEach((item, index)=> {
          if(item.id === action.payload) {
            state.splice(index, 1);
          }
        });
        return state
       
      },
      
      }}
      
  )

export let {increaseCount,addCart,deleteCount}=cartData.actions


export default configureStore({
  reducer: { 
    user:user.reducer,
    cartData:cartData.reducer
  }
}) 