Array;
[1, 2].map;

type Student = {
    passed : boolean;
}

const students: Student[] = [{passed: true}, {passed: true}, {passed: false}]
// 모든 학생들이 합격했으면 result는 true,
const result = students.every(student => student.passed);
// 일부라도 있으면 true; result2는 true
const result2 = students.every(student => student.passed);

class Animal {}

class Cat extends Animal {
    isCat: boolean = true;
}

class Dog extends Animal{
    isDog: boolean = true;
}

const animals: Animal[] = [new Cat(), new Dog(), new Cat()];

// animals가 고양이만 가지고 있는지 확인할 수 있다.

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isCat !== undefined;
}

const result3 = animals.every<Cat>(isCat);

console.log(result3);
