import { employeeAboveSalary, employeeWithAm } from "./task8_function.js";
import employee from "./employee.json" with {type : "json"}

let amEmployees = employeeWithAm(employee);
let aboveSalaryEmployees = employeeAboveSalary(employee,50000);

console.log("Employess with AM: ",amEmployees)
console.log("Employess with above salary: ",aboveSalaryEmployees)