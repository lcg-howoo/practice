{
    //타입이 알아서 정해지는 경우
    // Type inference
    let text = 'hello';
    // text = 1; // 타입스크립트가 인식함. 1을 할당할 경우 경고 뜸

    function print(message: string){
        console.log(message);
    }
    print('hello');

    function add(x: number, y: number): number{
        return x + y
    }
    //result는 타입추론으로 nmumber로 지정된다. 알아서 타입을 명시하는 것이 편하지만,
    //실제 개발시 많이 불편함 그러므로 result: number 형식으로 명시하는 것이 좋다.
    const result = add(1, 2);
}

