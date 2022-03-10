//1. how to declare a varilble using let and const;
const fatherName = 'fuad';
let season = 'rainy';
season = 'winter';

// 6 basic conditions: >, <, ===, !==, <==, >==;
// multiple conditions: &&, ||

if (fatherName === 'Fuad') {

}

else if (fatherName === 'fuad') {

}
else {

}

// 3. array declare 
// index
// length, push,

const numbers = [45, 34, 63, 23,];
numbers[1] = 44;
console.log(numbers);

// 4 for loop

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number)
}

// 5. function

function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}

const outPut = multiply(34, 55)
console.log(outPut);

// 6. Objects 
// 3 ways to access property by name

const student = {
    name: 'fahim',
    age: 22,
    friends: ['hossain', 'maruf', 'salman', 'sahil']
}

const muVariable = 'age'
// 3 ways to access property by name
console.log(student.age); // 1. direct by property
console.log(student['age']); // 2. access via porperty name string
console.log(student[myVariable]); // 3. access via property name in variable
