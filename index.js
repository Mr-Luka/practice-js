class Employee {
    constructor (name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    employeeData () {
        return `I am ${this.name}, I work at ${this.department} and my salary is $${this.salary}.`
    }
    updateInfo (salary) {
        this.salary = salary;
    }

}


const employee1 = new Employee ("Bojana", "construction", 1000);
const employee2 = new Employee ("Milan", "Architect", 5000);
employee1.updateInfo(10000)
console.log(employee1.employeeData());



class School {
    constructor (name, role, active) {
        this.name = name;
        this.role = role;
        this.active = active;
    }
    schoolData(){
        return `${this.name} is a ${this.role} and is ${this.active}`;
    }
    status(status) {
        if (this.status === "Active") {
            return `${active}`;
        } else if (this.status ==="Inactive") {
            return `${inactive}`;
        }
    }
}

const professor = new School ("Lora", "Professor", "Active");
const student = new School("Milan", "Student", "Inactive");

console.log(professor.schoolData())