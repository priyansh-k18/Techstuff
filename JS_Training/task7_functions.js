function evenNumber(n){
    for(let i = 0; i<n; i++){
        if(i%2 == 0) console.log(i)
    }
}
evenNumber(10)

let employees = [
    {
        name: "Abhay",
        age: 19,
    },
    {
        name: "Bharat",
        age: 24,
    },
    {
        name: "Chetan",
        age: 18,
    },
    {
        name: "Dheeraj",
        age: 22,
    },
    {
        name: "Shubham",
        age: 17,
    }
];

function employeesAge(employees,age){
    return employees.filter((employee) => {
          return employee.age < age
    })
}
console.log(employeesAge(employees,18))

function sortEmployees(employees, attribute) {

    return employees.sort(function(a, b) {

        if (a[attribute] < b[attribute]) {
            return -1;
        }

        if (a[attribute] > b[attribute]) {
            return 1;
        }

        return 0;
    });
}
console.log(sortEmployees(employees,"age"))
