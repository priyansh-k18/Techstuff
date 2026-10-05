//Find sum of first 10 natural numbers
//using loop
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum:", sum);

//while loop
let sum1 = 0;
let cnt = 1;

while (cnt <= 10) {
    sum1 += cnt;
    cnt++;
}

console.log("Sum1:", sum1);

//Print Fibonacci series upto first 10 numbers

let a = 0;
let b = 1;

for (let i = 1; i <= 10; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}


// 3. Print all the keys and values of employeeDetails object

const employeeDetails = {
    name: null,
    email: null,
    number: null,
    age: null,
    address: null,
    isMarried: null
};

for (let key in employeeDetails) {
    console.log(key, ":", employeeDetails[key]);
}