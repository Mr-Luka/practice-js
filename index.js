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
    constructor (name, role) {
        this.name = name;
        this.role = role;
    }
    schoolData(){
        return `${this.role} ${this.name} and is ${this.status()}`;
    }
    status(status) {
        if (status === "yes") {
            return `comes to school everyday`;
        };
        if (status === "no") {
            return `doesn't come to school anymore`;
        }
    }
}

const professor = new School ("Lora", "Professor", "Active");
const student = new School("Milan", "Student", "Inactive");
professor.status("yes");
console.log(professor.schoolData())