// 자바스크립트에서 this는 호출시점이 중요

console.log(this);

function simpleFunc(){
    console.log(this);
}

console.clear();
class Counter {
    count = 0;
    // increase = function () {
    // 	console.log(this);
    // }
    increase = () => {
        console.log(this);
    }
}

const counter = new Counter();
counter.increase();

// pointer가 caller에 할당됨.
/*
* let과 const로 선언한 변수는 윈도우에 등록되어져 있지 않으므로 이 caller를 호출하는 것은 윈도우가 아니라
* 그 어떤 오브젝트도 아니기 때문에 undefined로 나온다.
* 함수는 글로벌 객체로 등록된다. 반면 let, const는 아니다.
* */
// const caller = counter.increase;
// this를 꽁꽁 묶으려면 bind 메서드를 사용해야 한다. 여기서 정보를 잃어버리지 않는다. counter 객체를 가리키게 만든다!!
// bind 처리 안하고 하는 경우에는 해당 클래스 메서드가 arrow func일 경우 가능
const caller = counter.increase.bind(counter);
caller(); // 해당 context에서 this가 가리키는 것(오브젝트)이 없다. undefiend가 나온다.

// 함수는 기본적으로 window에 등록됨
function helloWorld(){
    console.log('hello');
}

// 호출가능
window.helloWorld();
// 만일 const 또는 let으로 선언할 경우 window 객체에 포함되지 않는다. 접근 못한다.
const elli = 'ellie';
let bob2 = 'bob'

//함수는 글로벌 객체에서 사용이 가능하지만 변수는 윈도우 객체에 추가되지 않는다.
var badVar = 'badVar';
window.badVar; // 변수지만 윈도우 객체에 추가된다 나쁜 사용예제.

class Bob {

}

const bob = new Bob();
// counter 클래스의 increase 메서들를 할 당했지만 this가 가리키는 것은 Bob 객체 왜냐 ! 실행시점이 중요하다.
bob.run = counter.increase;
bob.run();
