{
    //number
    const num: number = 123;

    const str: string = "hello";

    const boal: boolean = false;

    // undefined -> 값이 있는 없는지 아무것도 결정되지 않은 상태
    const name: undefined = undefined;
    // 숫자 타입 또는 undefined를 사용할 수 있다.
    let age: number | undefined = 3;

    function find(): number | undefined {
        return undefined;
    }


    // null -> 값이 없음을 의미.
    let person: null = null;
    // 보통 null은 이렇게 쓰인다.
    let person2: string | null;

    // unknown - 어떤 데이터가 들어 올 수 있을지 모르는 경우
    // 타입스트립트를 자바스크립트로 변환시 호환의 문제가 있어서 unknown이라는 타입 생김.
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    //any -
    let anything: any = 0;
    anything = "hello world";

    //void - 아무것도 리턴하지 않는 것.
   function print(): void {
       console.log('hello');
       return;
   }

    let unusable: void = undefined;

   // never 리턴하지 않는 함수 이 함수를 호출하면 리턴하지 않겠다는 의미.
    function throwError(message: string): never {
        //message -> server(log)
        throw new Error(message);
        // while(true)
    }

    // object 원시 타입을 제외한 모든 오브젝트 타입을 전달 할 수 있다.
    let obj: object;

    function acceptSomeObject(obj: object) {

    }

    acceptSomeObject({name: 'ellie'})
    acceptSomeObject({animal: 'dog'})



}
