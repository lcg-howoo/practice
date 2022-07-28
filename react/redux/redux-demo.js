const redux = require('redux');

// 리듀서 함수, 자바스크립트 표준이지만 리덕스 라이브러리에 의해 호출될 것. 항상 2개의 입력, 즉 2개의 파라미터를 받는다.
// 현재 상태를 받고 디스패치된 액션을 받으면 그게 리듀서가 돌아가게 한다.
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
// createStore 저장소 생성
// 저장소는 데이터 관리
// CreateStore에 Reducer룰 매개변수로 받는 이우는 어떤 리듀서가 저장소를 변경하는지 파악
const store = redux.createStore(counterReducer);

//리듀서 함수가 새로운 상태 스냅샷을 생성
// 리듀서는 액션이 도착할 떄마다 새로운 상태 스냅샷을 반환한다.

// 저장소를 구독할 컴포넌트

const counterSubscriber = () => {
  // 최신 상태의 state를 넘겨준다.
  const latestState = store.getState();
  console.log(latestState)
};
// counterSubscriber를 취한다. = component
store.subscribe(counterSubscriber)

// counterSubscriber() 실행한 값을 넘기는 것이 아닌 참조값만 넘기는 이유는 리듀서와 subscribe함수를 리덕스가 실행하기 떄문.

//액션을 발송하는 메서드 액션은 자바스크립트 객체이다.
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
