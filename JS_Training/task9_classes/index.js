import { Employee } from "./employee.js";


const employee1 = new Employee("Abhay", 19, 650000);
const employee2 = new Employee("Bharat", 24, 720000);
const employee3 = new Employee("Chetan", 18, 550000);
const employee4 = new Employee("Dheeraj", 22, 850000);
const employee5 = new Employee("Shubham", 17, 510000);


const employees = [
    employee1,
    employee2,
    employee3,
    employee4,
    employee5
];


const EmployeesBelow21 = Employee.filterByAge(employees, 21);

console.log("Employees below age 21:");

console.log(EmployeesBelow21);

const sortedByAge = Employee.sortEmployees(employees, "age");

console.log("Employees sorted by age:");

console.log(sortedByAge);


const sortedBySalary = Employee.sortEmployees(employees, "salary");

console.log("Employees sorted by salary:");

console.log(sortedBySalary);


const sortedByName = Employee.sortEmployees(employees, "name");

console.log("Employees sorted by name:");

console.log(sortedByName);