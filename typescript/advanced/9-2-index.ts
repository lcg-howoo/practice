{
    /*
    * 다른 타입에 있는 key에 접근해서 value의 타입을 사용할 수 있다.
    * */
    const obj = {
        name: "ellie"
    }
    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female'
    }

    type Name = Animal['name']; // Name type is string.
    const test: Name = "hello world";

    type Gender = Animal['gender']; // male, female

    type Keys = keyof Animal; //name | age | gender
    const key: Keys = 'gender';

    type Person = {
        name: string;
        gender: Animal['gender']
    }

    const person: Person = {
        name: "lee",
        gender: 'male'
    }
}
