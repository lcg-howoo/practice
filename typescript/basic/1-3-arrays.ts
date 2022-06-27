{
    // Array 한 가지의 타입만 가능
    const fruits: string[] = ['🍅', '🍌'];
    const scroes: Array<number> = [1, 3, 4];
    // readonly fruits를 변경할 수 없다.fruits.push() 불가능
    function printArray(fruits: readonly string[]) {}

    //  서로다른 타입을 가질 수 있는 배열
    // 튜플 권장 안합니다. 인덱스로 데이터를 꺼내는것이 가독성에 많이 떨어진다.
    // Tuple -> interface, type alias, class로 변경해서 하는 것이 좋다.
    let student: [string, number];
    student = ['name', 123];
    student[0]; // name
    student[1]; // 123
    const [name, age] = student;
    console.log("name : ", name);
    console.log("age : ", age);

    /**
     * 튜플 권장 안하는 이유
     * 데이터에 접근시 인덱스(0, 1 등)으로 가독성이 떨어진다.
     * 튜플대신 오브젝트 형태이면 가독성이 훨씬 오른다.
     * 튜플을 사용하는 경우
     *
     */

}
