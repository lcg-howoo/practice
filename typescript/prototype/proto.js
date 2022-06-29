const x = {};
const y = {};
//자바스크립트에서 모든 오브젝트는 프로토를 상속한다.
console.log(x);
console.log(y);
console.log(x.__proto__ === y.__proto__)

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans){
    this.beans = beans;
    // 만들어지는 인스턴트마다 포함된다.
    // Instance Member level
    // this.makeCoffee = (shots) => {
    // 	console.log("making coffee");
    // }
}

//protoType member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log("making coffee");

}

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(30);

console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
    this.milk = milk;
}
// LatteMachine -> CoffeMachine -> Object
// 자바스크립트에서 객체지향프로그래밍 상속을 하기 위한 것. 코드를 재사용할 수 있다.
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);
const latteMachine = new LatteMachine(22);
console.log(latteMachine);
latteMachine.makeCoffee();
