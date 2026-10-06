//1. Take an array of objects of employees created above and print those employees whose age is less than 50.



let employees = [
    {
        name : "Abhay",
        age  : 51,
    },
     {
        name : "Bharat",
        age  : 24,
    }, {
        name : "Chetan",
        age  : 55,
    }, {
        name : "Dheeraj",
        age  : 22,
    }, {
        name : "Shubham",
        age  : 60,
    },
    
]

let list = employees.filter((employee)=> {
    return employee.age < 50
})
console.log(list)

