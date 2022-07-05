import * as console from "console";

function Log(_: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  const newDescriptor = {
    ...descriptor,
    value: function (...args: any[]): any {
      console.log(`Calling ${name} with arguments: `);
      console.dir(args);
      console.log('this : ', this);
      const result = descriptor.value.apply(this, args);
      console.log("result : ");
      console.dir(result);
      return result;
    }
  }
  return newDescriptor;
}

class Calculator {
  @Log
  add(x: number, y: number): number {
    return x + y;
  }
}

const calculator = new Calculator();
calculator.add(1, 2);
