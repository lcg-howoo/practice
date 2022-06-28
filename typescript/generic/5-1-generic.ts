{
    /*generic
        유연하고 타입도 보장하고 재사용성을 높인다.
    */

    // number만 가능하다.
    function checkNotNullBad(arg: number | null): number {
        if (arg == null) {
            throw new Error("not valid number");
        }
        return arg;
    }

    // 타입 보장을 못한다.
    function checkNotNullAny(arg: any | null): any {
        if (arg == null) {
            throw new Error("not valid number");
        }
        return arg;
    }

    const result = checkNotNullAny(22);
    console.log(result);
    // checkNotNullAny(null);

    // 해결책 Generic으로 해결이 가능하다.

    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error("not valid number");
        }
        return arg;
    }

    const number = checkNotNull(123);
    console.log("generic type : ", number);
    // 변수에서 타입을 지정해준다.
    const boal: boolean = checkNotNull(true);
    console.log("generic type : ", boal);

}

