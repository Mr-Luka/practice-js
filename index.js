const person = {
    name: "Luka",
    sayHiii() {
        return `Hi my name is ${this.name}`;
    }
}

const sayHi = person.sayHiii.bind(person);
