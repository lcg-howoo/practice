import classes from './Counter.module.css';
//useSelector와 useStore가 있다. useStore는 스토어에 바로 접근가능
// 하지만 useSelector가 더 권장 자동으로 상태(스토어가 관리하는 상태)의 일부를 선택하게 한다.
// 함수형 컴포넌트가 아닌 경우 connect를 사용
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //리덕스 store에 action울 보냄
  const dispatch = useDispatch();
  //원하는 상태만 선택
  // counter는 리덕스가 관리하는 state이다.
  const counter = useSelector(state => state.counter);
  const toggleCounterHandler = () => {};
  const incrementHandler = () => {
    dispatch({type : 'increment'})
  }
  const decrementHandler = () => {
    dispatch({type : 'decrement'})
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick ={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
