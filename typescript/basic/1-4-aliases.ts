{
    // Type Alias
    // 기본적인 타입 정의부터 복잡한 것까지 정의할 수 있다.
    // 새로운 타입을 정의할 수 있다.
    type Text = string;
    const name: Text = 'geun';

    const address: Text = 'korea';

    type Num = number;
    // object 타입으로 정의할 수 있다.
    type Student = {
        name: string;
        age: number;
    }
    // java class라고 생각하자
    // public class Student{
    // name : String,
    // age : Long
    // }
    const student: Student = {
        name: 'geun',
        age: 31,
    }

    // String literal Types
    type Name = 'name' | 'chang';
    let geunName: Name;
    geunName = 'name'; // 문자열 name 만 쓸 수 있다.
    console.log(geunName);
    geunName = 'chang';
    console.log(geunName)
    type JSON = 'json';
    const json: JSON = 'json'; // 문자열 json만 사용할 수 있다.

    type Boal = true;
    const isCat: Boal = true;
}
