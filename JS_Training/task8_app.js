import { employeeAboveSalary, employeeWithAm } from "./task8_function.js";
import employee from "./employee.json" with {type : "json"}

let amEmployees = employeeWithAm(employee);
let aboveSalaryEmployees = employeeAboveSalary(employee,50000);

console.log("Employess with AM: ",amEmployees)
console.log("Employess with above salary: ",aboveSalaryEmployees)

let highSalaryEmployees = employeeAboveSalary(employee, 500000);

console.log("\nEmployees with salary above 5 Lac:");

highSalaryEmployees.forEach((employee) => {

    let salaryInLac = (employee.salary / 100000).toFixed(1);

    console.log(`${employee.name} - ${salaryInLac} Lac`);

});