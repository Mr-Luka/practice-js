const person = {
    name: "Luka",
    sayHi() {
        return `Hi my name is ${this.name}`;
    }
}
const jenna = {name: "Jenna"}
const sayHi = person.sayHi.bind(jenna);
console.log(sayHi());