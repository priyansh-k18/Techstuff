export function employeeWithAm(employees){
   return employees.filter((employee) => {
      return employee.name.toLowerCase().includes('am')
   })
}

export function employeeAboveSalary(employees,salary){
    return employees.filter((employee) => {
        return employee.salary > salary
    })
}

