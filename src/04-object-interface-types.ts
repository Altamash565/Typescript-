// type Person = {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

type Age = number


// interface Person {
//     firstName: string;
//     lastName: string;
//     age?: number;
// }

import { Person as BasePerson} from "./my-interface";

// interface Person extends BasePerson {
//     heightInCm: number
// }

type Person = BasePerson & {
    heightinCm: number
}
// interface A {
//     prop1: string;
// }

// interface B extends A {
//     prop2: string
// }

// const obj: B = {
//     prop1: "afsd",
//     prop2: "sdfasz"
// }

const person: Person = {
    firstName: "Altamash",
    lastName: "Khan",
    address: {
        country: "string",
        zipcode: "string",
        houseNumber: 12,
        city: "string",
        state: "string"
    },
    heightinCm: 175,
}

console.log(person)