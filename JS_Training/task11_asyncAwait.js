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

async function getEmployees(){
    
        let time = Math.random() * 1000 + 1000
        await new Promise((resolve) => {
            setTimeout(resolve,time)
        })
        return employees;
}

async function main(){
    let list = await getEmployees()
    console.log(list)
}

main()