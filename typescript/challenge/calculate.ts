{
    type operation = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

    function calculate(type: operation, num1: number, num2: number): number {
        switch (type) {
            case 'add' :
                return num1 + num2;
            case 'substract':
                return num1 - num2;
            case 'multiply' :
                return num1 * num2;
            case 'divide' :
                return num1 / num2;
            case 'remainder' :
                return num1 % num2;
            default:
                throw Error("unknown type")

        }
    }

    let add: number = calculate('add', 2, 4);
    let substract: number = calculate('substract', 2, 4);
    let multiply: number = calculate('multiply', 2, 4);
    let divide: number = calculate('divide', 2, 4);
    let remainder: number = calculate('remainder', 2, 4);

    console.log(add);
    console.log(substract);
    console.log(multiply);
    console.log(divide);
    console.log(remainder);

}
