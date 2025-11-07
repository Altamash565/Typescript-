//classes
//declare a class
//readonly property
//class fields
//public, private modifiers
//private methods
//getters, setters
//child class
//super keyword
//protercted modifier
//abstract classes and methods
//implement interfaces
//short syntax for constructor nmethod

class Animal {
    public name: string;
    public age: number;
    public readonly species: string;
    private isHungry: boolean = true;
    constructor(name: string, age: number, species: string) {
        console.log("constructor called")
        this.name = name;
        this.age = age;
        this.species = species
        this.isHungry = true
    }
    get hungerStatus(): string{
        return this.isHungry ? `${this.name} is hungry` : `${this.name} is full`
    }
    feed(food: string) {
        this.isHungry = false
        console.log(`${this.name} has been fed with ${food}`);
    }
}

const tom = new Animal("Tom", 8, "Dog")
const tomy = new Animal("Tomy", 9, "Dog")
console.log(tomy.hungerStatus)
tomy.feed("bread")
console.log(tomy.hungerStatus)

