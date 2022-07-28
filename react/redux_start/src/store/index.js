import {createStore} from 'redux';
import {configureStore, createSlice} from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

//key로 가득찬 객체 reducer안의 key를 의미
// counterSlice.actions.toggle
/*
* counterSlice.actions.toggleCounter() returns an action object of this shape {type: 'some auto-generated unique identifier}
* 액션 생성자라고 한다. 직접 액션 객체를 생성할 필요가 없다.
* */

// 여러개의 리듀서를 하나의 리듀서로 합쳐준다. configureStire에 객체를 전달한다.
const store = configureStore({
  // 복수개일 경우
  reducer : {
    counter : counterReducer,
    auth: authReducer,
  }
  // 한개
  // reducer: counterSlice.reducer
});
// const store = createStore(counterSlice.reducer);

export default store;
