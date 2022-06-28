{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
        hasSugar?: boolean; // 옵셔널 타입 '?' 추가
    }
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // 컴포지션 -> 필요한 기능을 contstructor에 dependency injection을 이용해 사용
    // 인터페이스 없이 하면 생기는 문제점 -> 재사용성이 많이 떨어진다. -> 커플링이 강해짐
    // 커플링이 너무 강하게 되어 있는 경우.

    //인터페이스를 통해서 서로간의 상호작용을 하는  것이 좋다.(디커플링 원칙)

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }


    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    // 이름이 복잡한 클래스가 필요없다.

    class CoffeeMachine implements CoffeeMaker {
        //필드
        private static BEANS_GRAM_PER_SHOT: number = 7;  //private으로 설정하면 못 본다. CoffeeMachine. 으로 못 호출
        private coffeeBeans: number = 0; //내부에서는 private으로 숨기고

        // 생성자를 통해 생성하는 것을 막은 것. -> static 메서드를 이용해서 만드는 것을 권장
        constructor(coffeBeans: number, private milkFrother: MilkFrother, private sugar: SugarProvider) {
            this.coffeeBeans = coffeBeans;
        }

        //메서드
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milkFrother.makeMilk(sugarAdded);
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
        // static makeMachine(coffeeBeans: number): CoffeeMachine {
        //     return new CoffeeMachine(coffeeBeans)
        // }
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
    // class CaffeLatteMachine extends CoffeeMachine {
    //     // readonly 한번 설정되면 바뀌지 않는 속성인 경우. 시리얼넘버는 한 번 부여되면 바뀌지 않는다.
    //     constructor(beans: number, public readonly serialNumber: string, private milkFrother: MilkFrother) { //dependency injection  디커플링화 하기 위해 인터페이스를 가져온다.
    //         super(beans);


    //     }
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots); // 부모 메서드 접근 super
    //         return this.milkFrother.makeMilk(coffee);
    //     }
    // }

    // class SweetCoffeeMaker extends CoffeeMachine {
    //     constructor(private beans: number, private sugar:
    //     ) {
    //         super(beans);
    //     }
    //     // overwirte
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots); // 부모 메서드 접근 super
    //         return this.sugar.addSugar(coffee);
    //     }
    // }

    //싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log("Steaming some milk.... ");
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        };
    }
    // 고급 우유 거품기
    class FancyMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log("Steaming some milk.... ");
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        };
    }
    // 차가운 우유 거품기
    class ColdMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log("Steaming some milk.... ");
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        };
    }

    // 우유가 필요없는 경우
    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        };
    }

    // 사탕을 통한 설탕 제조기
    class CandySugarMixer implements SugarProvider {
        private getSugar() {
            console.log("getting some sugar from jar");
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }
    // 설탕 제조기
    class JarSugarMixer implements SugarProvider {
        private getSugar() {
            console.log("getting some sugar from jar");
            return true;
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar,
            }
        }
    }

    // 설탕이 필요없는 경우
    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        };
    }

    // 상속의 문제점
    // 상속의 깊이가 깊어질 수록 서로간의 관계가 복잡해질 수 있다.
    // 부모클래스의 행동을 수정하면 상속받은 차일드 클래스에 영향을 미칠 수 있다.
    // 타입스크립트는 한가지 이상의 부모클래스를 상속할 수 없다. -> 그래서 composition을 사용한다.!'
    // 상속대신에 coposition을 더 선호해라
    // copositon
    // 필요한 것들을 가져와서 조립하는 방식을 의미한다.

    // class SweetCaffeeLatteMachine extends CoffeeMachine {
    //     constructor(private beans: number, private milkFrother: CheapMilkSteamer, private sugar: CandySugarMixer) {
    //         super(beans);
    //     }
    //     makeCoffee(shots: number): CoffeeCup {
    //         const coffee = super.makeCoffee(shots);
    //         return this.milkFrother.makeMilk(this.sugar.addSugar(coffee));

    //     }
    // }

    // 디커플링화!!! 인터페이스를 통해서 해결.

    // Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkeMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();
    // Sugar
    const candySugar = new CandySugarMixer();
    const sugar = new JarSugarMixer();
    const noSugar = new NoSugar();

    // 서로다른 객체를 만들 수 있다.
    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetSugarMachine = new CoffeeMachine(12, noMilk, sugar);


    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const coldLatteMachine = new CoffeeMachine(12, coldMilkeMaker, sugar);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
