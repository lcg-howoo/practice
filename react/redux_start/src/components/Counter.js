import classes from './Counter.module.css';
//useSelector와 useStore가 있다. useStore는 스토어에 바로 접근가능
// 하지만 useSelector가 더 권장 자동으로 상태(스토어가 관리하는 상태)의 일부를 선택하게 한다.
// 함수형 컴포넌트가 아닌 경우 connect를 사용
import {useSelector, useDispatch, connect} from "react-redux";
import {Component} from "react";
import {counterActions} from "../store/counter";

const Counter = () => {
  console.log("pass Counter")
  //리덕스 store에 action울 보냄
  const dispatch = useDispatch();
  //원하는 상태만 선택
  // counter는 리덕스가 관리하는 state이다.
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment(1));
  }

  const increaseHandler = () => {
    // {type: some_unique_identifier, payload:10}, redux toolkit이 여기서 기본값으로 사용하는 필드명이다.
    dispatch(counterActions.increment(10))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        {show && <div className={classes.value}>{counter}</div>}
        <div>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={increaseHandler}>Increase by 5</button>
          <button onClick={decrementHandler}>Decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
  );
};
export default Counter;
// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment()
//   }
//   decrementHandler = () => {
//     this.props.decrement()
//   }
//   toggleCounterHandler = () => {};
//
//   render() {
//     return (
//         <main className={classes.counter}>
//           <h1>Redux Counter</h1>
//           <div className={classes.value}>{this.props.counter}</div>
//           <div>
//             <button onClick ={this.incrementHandler.bind(this)}>Increment</button>
//             <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           </div>
//           <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//         </main>
//     );
//   }
// }
// // connect 메서드는 두개 매개변수로 받는다.
// // 첫 번째 리덕스 상태를 프롭으로 맵한다.
// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return{
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
