import {createStore} from 'redux';

const counterReducer = (state = {counter: 0}, action) => {
  if (action.type === 'increment') {
    //새로운 상태 리턴 반환값이 기존 state를 대체한다.
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }
  return state;
}

const store = createStore(counterReducer);

export default store;
