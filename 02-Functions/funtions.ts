//Function Parameter Types

function greet(name: string) {
    return `Hi ${name}`
}

function multiplication(num1: number, num2: number) {
    return num1 * num2
}

multiplication(5, 5)
greet('Hassan')

const doSomething = (name: string = 'Hassan') => {
    console.log(name)
}

doSomething()



// Return Type Annotations

const add = (num1: number, num2: number): number => {
    return num1 + num2
}

const rando = (num1: number, num2: number) => {
    if (num1 * num2 > 5) {
        return num1 * num2
    }
    return (num1 * num2).toString()
}


// Anonymous Function Contextual Typing

let colors = ['red', 'purple', 'yellow', 'blue']

let upperColors = colors.forEach(color => {
    return color.toUpperCase()
})
console.log(upperColors)

let lowerColors = colors.map(color => { return color.toLowerCase() })
console.log(lowerColors)


// Void Type

const printTwice = (value: number): void => {
    console.log(value)
    console.log(value)

}
// Never Type
// Used to throw error or functions with never ending loops
const checkStatus = (status: string): never => {
    while (true) {
        console.log(status)
    }
}