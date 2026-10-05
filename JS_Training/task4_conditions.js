// 1. Take 2 numbers and print the smallest one

let a = 25;
let b= 15;

if (a < b) {
    console.log("Smallest number:", a);
} else {
    console.log("Smallest number:", b);
}


// 2. Take 3 numbers and print the biggest one

let c = 25;
let d = 45;
let e = 35;

if (c >= d && c >= e) {
    console.log("Biggest number:", c);
} else if (d >= e && b >= c) {
    console.log("Biggest number:", d);
} else {
    console.log("Biggest number:", e);
}


// 3. Grade using switch case

let score = 75;
let grade;

switch (true) {
    case score >= 90:
        grade = "A";
        break;

    case score >= 80:
        grade = "B";
        break;

    case score >= 70:
        grade = "C";
        break;

    case score >= 50:
        grade = "D";
        break;

    default:
        grade = "F";
}

console.log("Grade:", grade);
