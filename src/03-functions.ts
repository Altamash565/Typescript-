function add(a: number, b: number): number {
    return a + b;
}

const add2 = function(a:number, b:number): number {
    return a + b;
}

const add3 = (a: number, b: number) : number => {
    return a + b
}

const add4 = (a: number, b: number): number => a + b;

function greet(name: string): void {
    console.log(`Hello ${name}`)
}

function greet2(name?: string): void {
    console.log(`Hello ${name ?? "guest"}`)

}

function greet3(name: string = "guest"): void {
    console.log(`Hello ${name}`)
}

// console.log(add2(3, 2))
// never return type

// throw error
// infinite loop

function throwError(message: string): never {
    throw new Error(message)
}
// greet3("Goon")

// throwError("custom error message")

// function overloading
function combine(a: number, b: number): number;
function combine(a: string, b:string) : string;

function combine(a: number | string, b: number | string): string | number {
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b
    } else {
        throwError("Invalid args")
    }
}

console.log(combine(1,2))
console.log(combine("hello", "world"))

// function overloading by parameter count

function greet4() : string
function greet4(name: string): string

function greet4(name?: string): string {
    return (`hello ${name ?? "guest"}`);
}

console.log(greet4("farhan"))