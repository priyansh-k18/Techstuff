export class Employee {

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    static filterByAge(employees, age) {

        return employees.filter((employee) => {
            return employee.age < age;
        });

    }

    static sortEmployees(employees, attribute) {

        return employees.sort((a, b) => {

            if (a[attribute] < b[attribute]) {
                return -1;
            }

            if (a[attribute] > b[attribute]) {
                return 1;
            }

            return 0;
        });

    }
}