function* simpleGenerator() {
  console.log('before yield 1')
  yield 1;
  console.log('after yield 1')
  console.log('before yield 2')
  yield 2;
  console.log('after yield 2')
  console.log('before yield 3')
  yield 3;
  console.log('after yield 3')
}

const generatorObject = simpleGenerator();
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())

const generatorObject2 = simpleGenerator();
console.log(generatorObject2 === generatorObject)
console.log("before calling next method ", generatorObject);

//next
//next method가 호출되어야 simpleGenerator 메서드가 호출된다.
console.log("after calling next method ", generatorObject.next());
//{ value: 1, done: false } done의 false의 의미는 next 다음이 더 있다는 의미. true는 다음으로 진행할일이 없다는 것을 의미.
console.log("after calling next method ", generatorObject.next());//{ value: 2, done: false }
console.log("after calling next method ", generatorObject.next());//{ value: 3, done: false }
console.log("after calling next method ", generatorObject.next());//{ value: undefined, done: true }

//return


//throw

//multiple generator

//infinite loop
function* generateId() {
  let id = 1;

  while (true) {
    console.log("before yield")
    const increment = yield id;
    console.log("after yield")
    if (increment != null) {
      id += increment;
    } else {
      id++;
    }
  }
}

const generator = generateId();
console.log(generator.next(3));
// next메서드의 매개변수로는 generator가  한번  호출 되고 나서 매개변수에 넣을 수 있다. 왜? 처음 호출하면 yield(after yield) 이후의 작업은 실행되지 않는다.
console.log(generator.next());
console.log(generator.next(5));
console.log(generator.next());
console.log(generator.next());

//iterator
function* generatorArray(array) {
  for (let i = 0; i < array.length; i++) {
    yield array[i]
  }
}

const generatorArrayObj = generatorArray([4, 6, 10, 54, 33]);
console.log(generatorArrayObj.next())
console.log(generatorArrayObj.next())
generatorArrayObj.return(); // 반복을 끝낸다.
console.log(generatorArrayObj.next())
console.log(generatorArrayObj.next())

//return
console.log(generatorArrayObj.next()) ////{ value: 4, done: false }
console.log(generatorArrayObj.next())//{ value: 6, done: false }
generatorArrayObj.return(); // 반복을 끝낸다.
console.log(generatorArrayObj.next())//{ value: undefined, done: true }
console.log(generatorArrayObj.next())//{ value: undefined, done: true }

//throw
generatorArrayObj.throw("message"); // 제너레이터의 반복중에 error를 일으킬 수 있다.
