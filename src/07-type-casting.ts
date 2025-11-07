//type-casting / asssertion
// DOM 

// addOrConcat(2,3, "add") --> 5
// addOrConcat(2,3, "concat") --> "23"

function addOrConcat(a: number, b:number, c:"add" | "concat"):number | string {
    if(c === "add") {
        return a + b
    }
    return "" + a + b
}

// console.log(addOrConcat(2,3, "concat"))

const value: string = addOrConcat(2,2, "concat") as string 
const value2: number = addOrConcat(2,4, "add") as number
const value3: number = <number>addOrConcat(2,5, "add") // tsx, jsx      

//DOM
// selet input fields
const nameInput = document.getElementById("name")! as HTMLInputElement;
const ageInput = document.getElementById("age")! as HTMLInputElement;
const form = document.getElementById("user-form")! as HTMLFormElement;
const output = document.getElementById("output")! as HTMLElement
form.addEventListener("submit" , (e) => {
    e.preventDefault()

    const nameValue = nameInput.value
    const ageValue = ageInput.value
    console.log(nameValue, ageValue)
    output.innerHTML = `<p> ${nameValue}: ${ageValue} </p>`
}) 


console.log(value)
console.log(value2)
