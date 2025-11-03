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

import { Person } from "./my-interface";

const person: Person = {
    firstName: "Altamash",
    lastName: "Khan",
    address: {
        country: "string",
        zipcode: "string",
        houseNumber: 12,
        city: "string",
        state: "string"
    }
}

console.log(person)