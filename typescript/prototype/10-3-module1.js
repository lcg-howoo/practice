/* 모듈
자바스크립트에서 모듈이란 파일안에 코드를 모듈화해서 작성한다.
한 파일 안에 작성된 코드를 의미한다.
각각의 파일에서 동일한 변수명이 있을 경우 문제가 생긴다.
그래서
코드를 파일내부에서만 한정시키는 것을 의미한다.
기본적으로 다른 파일들이 접근하거나 볼 수 없다.
제공하는 곳에서 export 와 받는 곳에서 import를 사용한다.
*/


// export default 기본 적으로 import 대상이되는 메서드
// export default function add(a, b){
// 	return a+b;
// }

// default는 하나야 한다.

export function print() {
    console.log('print');
}

export function add(a, b){
    return a+b;
}

export const number = 10;
