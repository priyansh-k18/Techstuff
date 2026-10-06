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

function getEmployees(){
    return new Promise((resolve,reject) => {
        let time = Math.random * 5000 + 1000
         setTimeout(() => {
            resolve(employees)
         },time);
    });
}


function sortEmployees(employees){
    return new Promise((resolve,reject) => {
         let sortedEmployees = employees.sort((a,b) => {
              return a.name.localeCompare(b.name);
         });
         resolve(sortedEmployees);
    });
}

getEmployees()
    .then((employees) => {

        console.log("Employees received:");
        console.log(employees);

        return sortEmployees(employees);

    })
    .then((sortedEmployees) => {

        console.log("Employees sorted by name:");
        console.log(sortedEmployees);

    })
    .catch((error) => {

        console.log("Error:", error);

    });