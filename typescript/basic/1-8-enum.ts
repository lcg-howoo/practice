{
    // enum
    //pros
    // 여러가지의 관련된 상수값을 한 번에 모아서 정의함. 자바스크립트에 없어서 타입스크립트에서 정의한 것임.
    //cons

    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 0;
    const WEDNESDAY = 0;
    const DAYS_ENUM = Object.freeze({"MONDAY" : 0, "TUESDAY": 1, "WEDNESDAY":2}); // freeze 메소드는  object 수정이 불가능하게 만듬 한번만 정의할 수 있게한다.
    const dayOfToday = DAYS_ENUM.MONDAY; // 타입이 보장되고 타입이 안정되게 쓸 수 있도록 하는 것 - 이넘


    // TypeScirpt enun은 앞글자만 대문자로쓴다.
    enum Days {
        Monday, //0 값을 할당 안했을 경우.  Monday = "what the.."
        Tuesday, //1
        WEDNESDAY, //2
        Thursday, //3
        Friday, //4
        Saturday,
        Sunday,
    }

    console.log(Days.Tuesday);
    const day = Days.Saturday;
    console.log(day)

    // 타입스크립트에서 enum은 지양함
    // 이유1
    let day2: Days = Days.Friday; //
    day2 = Days.Monday;
    day2 = 1; // 숫자로 할당이 가능하다 -> 이는 타입매치에 대한 문제가 생긴다.
    console.log(day2)
    // 지향
    // union type으로 해결 enum 문제 해결
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'
    let dayOfWeek: DaysOfWeek = "Monday";
    let dayOfWeek2: DaysOfWeek = "Tuesday";

    // union type이 enum을 대체 못하는 경우
    // 안드로이드나 ios 코틀린이나 스위프트를 사용한다. -> 사용자의 데이터를 제이슨으로 묶어서 다시 다른 클라이언트에게 보내야 될 때
    // 모바일 클라이언트에서 사용하는 네이티브 프로그래밍 언어에서는 유니온 타입을 표현할 수 있는 방법이 없어서 enum으로 타입을 쓴다.
}
