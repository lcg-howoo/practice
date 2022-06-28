{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    // 인터페이스 - 나랑 의사소통하려면 나는 이런 규약을 가지고 있어 나는 이런 행동을 할 수 있다라는 것을 명시해 놓은 것.
    // contract 개념
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    // public
    // private 외부에서 절대 볼 수 없고 접근할 수 없다.
    // protected 해당 클래스를 상속한 자식들은 접근 가능

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {

        //필드
        private static BEANS_GRAM_PER_SHOT: number = 7;  //private으로 설정하면 못 본다. CoffeeMachine. 으로 못 호출
        private coffeeBeans: number = 0; //내부에서는 private으로 숨기고

        // 생성자를 통해 생성하는 것을 막은 것. -> static 메서드를 이용해서 만드는 것을 권장
        private constructor(coffeBeans: number) {
            this.coffeeBeans = coffeBeans;
        }


        //메서드
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

        private grindBeans(shots: number) {
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
            console.log(`grinding beans for ${shots}`)
        }

        private preheat(): void {
            console.log("heating up!!")
        }

        private extract(shots: number): CoffeeCup {
            console.log(`pulling ${shots} shots...`);
            return {
                shots: shots,
                hasMilk: false,
            };
        }

        // 컨스트럭터를 거치지않고 만들고 싶을 경우
        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }
        // 내부에서 coffeeBeans에 접근을 못하니 외부에서 해당 메서드를 통해서 접근한다.
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0")
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log("cleaning on the machine!")
        }

    }
    //const maker = new CoffeeMachine(32);
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32); //static 키워드를 통한 오브젝트를 만드는 함수를 제공한다면 -> constructor에 new 클래스명 생성하는 방식을 막은 것.
    //maker.coffeeBeans = 3; // valid 하지만  필드값에 접근이 가능해서 문제가 생긴다.
    //maker.coffeeBeans = -32; // invalid 클래스의 필드 값에 접근하는 문제
    maker.fillCoffeeBeans(30);
    // abstraction 방법
    // 접근 제어자를 통해서 encapsulation 또는 인터페이스를 통해서 한다.
    // 호출 안 하는 메서드에 private을 붙이면 호출이 안됨
    maker.makeCoffee(2);

    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32); //static 키워드를 통한 오브젝트를 만드는 함수를 제공한다면 -> constructor에 new 클래스명 생성하는 방식을 막은 것.
    //maker2.fillCoffeeBeans(30); // interface인 커피메이커 안에는 fillCoffeeBeans 메서드가 없다 그러므로 사용 못함
    maker2.makeCoffee(2);

    const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32); //static 키워드를 통한 오브젝트를 만드는 함수를 제공한다면 -> constructor에 new 클래스명 생성하는 방식을 막은 것.
    maker3.fillCoffeeBeans(30); // interface인 커피메이커 안에는 fillCoffeeBeans 메서드가 없다 그러므로 사용 못함
    maker3.makeCoffee(2);
    maker3.clean();



    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee)
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {

        }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee)
            this.machine.clean()
            this.machine.fillCoffeeBeans(56);
        }
    }

    const maker4: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker4);
    const pro = new ProBarista(maker4)

    amateur.makeCoffee();
    pro.makeCoffee();
}
