{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }
    class CoffeeMaker {

        //필드
        static BEANS_GRAM_PER_SHOT:number = 7; //변하지 않는 정보, class level -> 오브젝트마다 만들어지지 않아서 메모리 낭비를 막는다. 멤버변수 뿐만 아니라 함수에도 적용된다.
        coffeeBeans: number = 0; //instance(object) level -> 오브젝트마다 생성

        constructor(coffeeBeans:number){
            this.coffeeBeans = coffeeBeans;  //this는 클래스안에 있는 필드 coffeebeans를 의미하고 할당된 coffeeBeans는 인자를 뜻한다.
        }

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
    }
    const maker = new CoffeeMaker(32); // ()의 의미는 생성자를 호출하는 것
    console.log(maker);

    const maker3 = CoffeeMaker.makeMachine(3); // static일 경우 클래스.메서드 형식으로 바로 호출이 가능하지만
    maker.makeCoffee(1) //아닌 경우 new CoffeeMaker 생성자를 만들고 할당된 변수로 메서드 호출

    // static -> 오브젝트를 생성하지 않고 클래스 레밸에서 호출이 가능하도록 만들어진것들.
    Math.abs(3);
}
