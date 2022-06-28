{
    interface Employee{
        pay(): void;
    }

    class FullTimeEmployee implements Employee{
        pay() {
            console.log('full time')
        }
        workFullTime(){

        }
    }

    class PartTimeEmployee implements Employee{
        pay() {
            console.log('part time')
        }
        workPartTime(){

        }
    }
    // 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 지양해야 한다.
    function payBad(employee: Employee): Employee{
        employee.pay();
        return employee;
    }

    // T는 Employee를 상속한 것들만 된다.
    function pay<T extends Employee>(employee: T): T{
        //generic 일반적인 타입이 들어갈 수 있기 때문에 숫자인지 스트링인지 몰라서 사용할 수 없다.
        employee.pay();
        return employee;
    }

    const ellie = new FullTimeEmployee();
    const bob = new PartTimeEmployee();
    ellie.workFullTime();
    bob.workPartTime();

    const ellieAfterPay = pay(ellie);
    const bobAfterPay = pay(bob);
    /* pay 메서드만 나온다. pay메서드는 반환값이 Employee지만 이용할 수 있는 메서드를 찾을때는 workFullTime 메서드가 없어짐
       generic을 이용해서 해결하자!!!
    */
    // ellieAfterPay.

    // 해결책 : 30번째 줄


    // 예제
    const obj = {
        name : 'ellie',
        age : 20
    }

    const obj2 = {
        animal : 'dog'
    }
    // object 안에 들어있는 key의 타입을 의미
    // K extends keyof T 오브젝트 T에있는 key를 의미한다.
    // T[K] 오브젝트 T에 있는 K(key)의 Value가 리턴된다.
    function getValue<T, K extends keyof T>(obj: T, key: K): T[K]{
        return obj[key];
    }

    console.log(getValue(obj, 'name')); // ellie
    console.log(getValue(obj, 'age'));	// 20
    // console.log(getValue(obj, 'score')); // key 값이 아닌 값을 넣으면 에러가 나온다.
    console.log(getValue(obj2, 'animal')); // dog


    interface Person {
        name: string
        age: number
    }

    type Test = keyof Person // ("name", "age")
}
