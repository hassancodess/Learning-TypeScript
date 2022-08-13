let myName:string = "Hassan"
myName.toUpperCase() // HASSAN
myName.toLowerCase() // hassan
myName  = "9"


// ERR1: Cannot redeclare blockscoped variables
// The name variable is declared somewhere in the typings for the DOM library, so the global type definition clashes with the local variable declaration.
// SOLUTION: Convert your file to an ES Module by adding export {} in the end or import a file

let myNumber: number = 9
myNumber = 4

let myBool: boolean = true
myBool = false

// Type Inference

let bike = "string"
// bike = false // ERR

let isAuthenticated = true
// isAuthenticated = 'false' //ERR


// Any Type

let var1: any = 'Hello'
var1()
var1.saasda()
var1.asd = 'asd'


// When to use Types

// Case 1
let movies = ['Movie A','Movie B','Movie C','Movie D','Movie E']
let foundMovie: string;
movies.forEach(movie => {
    if(movie === 'Movie E'){
        foundMovie = movie
        // break;
    }
});

// ERR2: Jump Target cannot cross function boundary
// break statement only works in    for loop, for...of, for...in, while, switch
// SOLUTION: throw an error in a try/catch block to break out of the loop if you're in a function and can't use the break statement.

