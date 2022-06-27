{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    // public
    // private 외부에서 절대 볼 수 없고 접근할 수 없다.
    // protected 해당 클래스를 상속한 자식들은 접근 가능
    class CoffeeMaker {
        // 생성자를 통해 생성하는 것을 막은 것. -> static 메서드를 이용해서 만드는 것을 권장
        private constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;
        }

        //필드
        private static BEANS_GRAM_PER_SHOT:number = 7;  //private으로 설정하면 못 본다. CoffeeMaker. 으로 못 호출
        private coffeeBeans: number = 0; //내부에서는 private으로 숨기고

        //메서드
        makeCoffee(shots: number): CoffeeCup{
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            };
        }
        // 컨스트럭터를 거치지않고 만들고 싶을 경우
        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans)
        }
        // 내부에서 coffeeBeans에 접근을 못하니 외부에서 해당 메서드를 통해서 접근한다.
        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error("value for beans should be greater than 0")
            }
            this.coffeeBeans += beans;
        }

    }
    //const maker = new CoffeeMaker(32);
    const maker = CoffeeMaker.makeMachine(32); //static 키워드를 통한 오브젝트를 만드는 함수를 제공한다면 -> constructor에 new 클래스명 생성하는 방식을 막은 것.
    //maker.coffeeBeans = 3; // valid 하지만  필드값에 접근이 가능해서 문제가 생긴다.
    //maker.coffeeBeans = -32; // invalid 클래스의 필드 값에 접근하는 문제
    maker.fillCoffeeBeans(30);


    // getter, setter

    class User{
        private firstName : string;
        private lastName : string;
        // fullName : string;
        constructor(firstName: string, lastName: string){
            this.firstName = firstName;
            this.lastName = lastName;
            // this.fullName = `${firstName} ${lastName}`;
        }

        // 상단 private화 시킨 호출 방식과 동일한 방식 constructor에 private 넣어서 선언하면 필드에 선언할 필요 없이 사용
        // constructor(private firstName: string, private lastName: string){ //public 가능
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.fullName = `${firstName} ${lastName}`;
        // }
        private internalAge = 5;
        get fullName(): string{
            return `${this.firstName} ${this.lastName}`;
        }

        get age(): number{
            return this.internalAge;
        }

        set age(num:number){
            if(num < 0){
                throw new Error("age is not lower than 0")
            }
            this.internalAge = num;
        }
    }

    const newUser = new User("steve", "jobs");
    // 한 번 할당되면 계속 지정되어져 있다. 그러므로 getter를 이용해 정의
    //console.log(newUser.fullName)
    //newUser.firstName = "geun";
    //console.log(newUser.fullName)

    //일반 변수처럼 사용이 가능
    const newUser2 = new User("steve", "jobs");
    console.log(newUser2.fullName);
    // newUser2.firstName = "geun";
    console.log(newUser2.fullName);

}
