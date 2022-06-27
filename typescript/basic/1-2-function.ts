{
    //javascript 지양
    // function jsAdd(num1, num2){

    // 	return num1 + num2;
    // }

    // //TypeScript -> 타입이 지정되고 넘버 타입을 반환한 다는 것을 알 수 있다.
    // function add(num1: number, num2: number): number{
    // 	return num1 + num2;
    // }

    // //javaScript 지양
    // function jsFetchNum(id){
    // 	return new Promise((resolve, reject) => {
    // 		resolve(100);
    // 	})
    // }

    // // typeScript
    // 프로미스를 리턴하는데 패치가 되고 숫자 데이터를 반환한다고 예측할 수 있다.
    // function fetchNum(id: string): Promise<number>{
    // 	return new Promise((resolve, reject) => {
    // 		resolve(100);
    // 	})
    // }

    //javascript => typescript
    //Optional parameter
    function printName(firstName: string, lastName: string){
        console.log(firstName);
        console.log(lastName);

    }

    printName("lee", "geun");
    // printName("lee") -> 인자 개수도 같아야 한다. -> 한 개의 인자만도 보내고 싶다.
    //Optional parameter 예제
    function printOptionalName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }

    printOptionalName("lee");
    printOptionalName("lee", undefined); // undefined까지 보낼 수 있다.

    //Optional parameter와 비슷한 기능  그냥 Optional parameter를 사용해라
    function printNameSimilar(firstName: string, lastName: string | undefined){
        console.log(firstName);
        console.log(lastName);
    }
    printOptionalName("lee", undefined); // undefined로 넣어줘서 처리

    //default parameter
    function printMessage(message: string = 'Default message !!!'){
        console.log(message);
    }
    printMessage(); // 인자에 값을 넘겨주지 않아도 기본 값으로 설정된 값을 준다.

    //Rest parameter  인자의 개수를 한정 되지 않고 처리
    function addNumbers(...numbers: number[]): number{ // 숫자 타입을 배열로 받는다.
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2, 22, 344, 55));
}
