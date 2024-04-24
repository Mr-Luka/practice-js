class School {
    constructor (name, role, active){
        this.name = name;
        this.role = role;
        this.active = active;  // true or false
        return `${this.role} ${this.name} is ${this.active}`
    }
    
    access(active, inactive) {
        if (this.active) {
            return `is ${active}`;
        } if (this.inactive) {
            return `is ${inactive}`;
        }
    }
}

const professor = new School("Lora", "professor", "active");
const student = new School("Michael",  "student", "inactive");

console.log(professor.School());