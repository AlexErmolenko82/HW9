"use strict"
// Создать класс Employee у которого будут следующие поля (задаются через конструктор):
// firstName - тип string
// lastName - тип string
// age - тип number
// jobPosition - тип string
// salary - тип number
// К данному классу, также необходимо добавить:
// “геттер” fullName - который будет выводить полное имя (комбинация firstName и lastName)
// добавить статический свойство - "кол-во дней отпуска в году" = 18
// добавить метод, который будет считать годовую зарплату сотрудника
// Создать 2 экземпляра этого класса (по аналогии с cat1, cat2 - как делали на занятии).

class Employee {
    static holidaysInYear = 18;
    constructor(firstName, lastName, age, jobPosition, salary) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.jobPosition = jobPosition;
      this.salary = salary;
    }
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    showYearSalary() {
        return this.salary * 12;
    };
}

// Object.prototype.showYearSalary = function (employee) {
//     return employee.salary * 12;
// };

const employee1 = new Employee("John", "Smith", 24, "JSDeveloper", 600);
const employee2 = new Employee("Adam", "Johnson", 24, "PythonDeveloper", 500);

console.log(employee1);
console.log(employee2);

console.log(`${employee1.fullName}, year salary: ${employee1.showYearSalary()}`);
console.log(`${employee1.fullName}, year salary: ${employee2.showYearSalary()}`);