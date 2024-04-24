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
    constructor (name, role, status) {
        this.name = name;
        this.role = role;
        this.status = status
    }
    schoolData(){
        return `${this.role} ${this.name} is ${this.status}`;
    }
    theirStatus(here) {
        this.status = here;
    }

}

const professor = new School ("Lora", "Professor", "Active");
const student = new School("Milan", "Student", "Inactive");
professor.theirStatus("Retired");
console.log(professor.schoolData())
console.log(student.schoolData());


class AntKingdom {
    constructor (role, age, size) {
        this.role = role;
        this.age = age;
        this.size = size;
    }
    antsLife() {
        return `${this.role} is ${this.age} years old and grew in ${this.size} size`;
    }
    sizes(mass) {
        this.size = mass;
    }
}

const queen = new AntKingdom ("Queen", "10", "medium");
const worker = new AntKingdom ("Worker", "5", "small");

console.log(queen.antsLife());
console.log(worker.antsLife());
queen.sizes("large");

console.log(queen.antsLife());


class Jobs {
    constructor(name, jobTittle, happines, age){
        this.name = name;
        this.jobTittle = jobTittle;
        this.happines = happines;
        this.age = age;
    }
    workHard() {
        return `My name is ${this.name}, I am ${this.age}, I ${this.happiness} my ${this.jobTittle} job`;
    };
    changeJob(newJob) {
        this.jobTittle = newJob;
    };
};

const john = new Jobs("John", "lawyer", "unhappy", 37);
const mariola = new Jobs("Mariola", "facialist", "happy", 43);

console.log(john.workHard());
console.log(mariola.workHard());