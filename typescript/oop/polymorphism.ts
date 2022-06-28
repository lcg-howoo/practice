{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
        hasSugar?: boolean; // 옵셔널 타입 '?' 추가
    }
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    class CoffeeMachine implements CoffeeMaker {
        // 생성자를 통해 생성하는 것을 막은 것. -> static 메서드를 이용해서 만드는 것을 권장
        constructor(coffeBeans: number) {
            this.coffeeBeans = coffeBeans;
        }

        //필드
        private static BEANS_GRAM_PER_SHOT: number = 7;  //private으로 설정하면 못 본다. CoffeeMachine. 으로 못 호출
        private coffeeBeans: number = 0; //내부에서는 private으로 숨기고

        //메서드
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
        private extract(shots: number): CoffeeCup {
            console.log(`pulling ${shots} shots...`);
            return {
                shots: shots,
                hasMilk: false,
            };
        }

        private preheat(): void {
            console.log("heating up!!")
        }

        private grindBeans(shots: number) {
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
            console.log(`grinding beans for ${shots}`)
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
    // 공통적인 기능은 부모에게서 가져옴 : 재사용성 증대
    class CaffeLatteMachine extends CoffeeMachine {
        // readonly 한번 설정되면 바뀌지 않는 속성인 경우. 시리얼넘버는 한 번 부여되면 바뀌지 않는다.
        constructor(beans: number, public readonly serialNumber: string) { //beans를 추가하는 이유 부모가 가지고 있는 constructor 방식과 똑같이 가져온다.
            super(beans);
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots); // 부모 메서드 접근 super
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            }
        }
        private steamMilk(): void {
            console.log("Steaming some milk....");
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(beans: number) {
            super(beans);
        }
        // overwirte
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots); // 부모 메서드 접근 super
            this.addSugar();
            return {
                ...coffee,
                hasSugar: true,
            }
        }
        addSugar() {
            console.log("pour some sugar to coffee");
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(30);
    maker.makeCoffee(2);

    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(40, "SW-s34sqwe-29");

    const coffee = latteMachine.makeCoffee(3)
    console.log(coffee)

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, "SW-s34sqwe-29"),
        new SweetCoffeeMaker(10),
        new CoffeeMachine(20),
        new CaffeLatteMachine(20, "Sw-sdwe1-29"),
        new SweetCoffeeMaker(20)
    ]
    // makeCoffee를 오버라이딩함으로써 다형성을 만족시킴.
    machines.forEach(machine => {
        console.log("--------------------------------")
        machine.makeCoffee(1);
    })
}
