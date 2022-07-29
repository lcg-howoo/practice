import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      //redux-toolkit 내부 immer라는 패키지가 직접 접근하여 값을 바꾸는 것을 막는다.
      //자동으로 state.counter++ 원래 있는 상태를 복제한다. 그리고 새로운 상태 객체를 생성한다.
      //모든 상태를 변경할 수없게 유지하고 저희가 변경한 상태는 변하지 않도록 오버라이드 한다.
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
}); 
export const counterActions = counterSlice.actions;

export default counterSlice.reducer
