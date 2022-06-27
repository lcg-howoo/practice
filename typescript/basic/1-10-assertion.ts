{
    // 타입을 강요할 때
    // Type Assertions 지양하는 것이 좋다.
    function jsStrFunc(): any{
        return 'hello';
    }
    const result = jsStrFunc();
    // result. 문자열로 인식을 못해서 api를 못 찾는다.
    //타입 케스팅
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1));
    // type assertion은 타입을 장담하는 경우에 만 쓴다.

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    //numbers.push(2); // undefiend가 나올 수 있기 때문에 에러가 발생
    //해결
    // 이렇게 하면 Array라고 확신할 경우 사용 또는 const numbers = findNumbers()! 이렇게 사용 된다. ! 값이 있다고 확신하는 경우 사용
    // !가 붙으면 무조건 null, undefined가 아니다. 장담하는 표현임.
    numbers!.push(2);
    const button = document.querySelector('class');
    if(button){
        button.nodeValue;
    }
}
