// arrays , tuples

// const fruits: string[] = ["apples", "mango"]
// const numbers: number[] = [12, 23, 4];
// numbers.push(12)

//type interference
const fruits = ["apple", "mango"]
const numbers = [1, 2, 34]
numbers.push(12)
// const myArray : (string | number) [] = [1, 2, 3, "3"]
const myArray = [1, 2, 3, "3"]

myArray.push(12)
myArray.push("12")
// myArray.push(true)


interface Person {
    firstName: string;
    lastName: string;
    age?: number;
}

const persons: readonly Person[] = [{
    firstName: "Altamash",
    lastName: "Khan"
}]

//tuples 
// array with fixed size and types
type myCustomTupletype = [string, string, number]
const myCustomTuple: [string, string, number] = ["string1", "string2", 12]
