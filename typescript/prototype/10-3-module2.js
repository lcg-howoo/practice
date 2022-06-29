import * as calculator from './10-3-module1'
console.log(calculator.add(3,4));
console.log(calculator.print());
console.log(calculator.number);

// import sum, {print as printMessage} from './10-3-module1'
// import시 명칭이 달라도 가능핟.
// export는 해당 메서드와 똑같이 작성하되 만일 바꾸고 싶다면 as를 사용한다.

// console.log(sum(3, 4))
// printMessage();

// export는 변수도 가져올 수 있다.


// 모듈화를 이용하면 파일들간의 중복적으로 발생할 수 있는 이름 충돌을 방지, 서로간의 코드를 부리함으로써
// 모듈성을 높여주고, 모듈간의 재사용성도 높여준다.
