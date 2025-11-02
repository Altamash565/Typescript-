// any, unknown
let someVariable: any;
someVariable = 12;
// someVariable = "hello"

someVariable.toFixed(3)

// console.log(someVariable)

// console.log(someVariable.toFixed(3))

// unknown
let someVariable2: unknown;
let boolVar: boolean;
someVariable2 = 12;
if (typeof someVariable2 === "number") {
    console.log(someVariable2.toFixed(3))
}

someVariable2 = true;
if(typeof someVariable2 === "boolean"){

    boolVar = someVariable2
}
