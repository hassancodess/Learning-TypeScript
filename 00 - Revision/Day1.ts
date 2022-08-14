// !!!!!!! Variables !!!!!!!

// String Type
let myVar: string = 'asda'
// Boolean Type
let myVar1: boolean = false
// Number Type
let myVar2: number = 123
// Any Type
let myVar3: any = 'asd'
myVar3 = 123
myVar3 = true

// Type Inference
let myVar4 = 54

console.log(myVar)
console.log(myVar1)
console.log(myVar2)
console.log(myVar3)
console.log(myVar4)

// !!!!!!! Functions !!!!!!!

const square = (x: number) => {
  console.log(x * x)
}
square(5)

// Multiple Parameters
const printName = (firstName: string, lastName: string) => {
  console.log(`${firstName} ${lastName}`)
}
printName('Hassan', 'Hanif')

// Default Parameters
const cube = (x: number = 3) => {
  console.log(x * x * x)
}
cube()

// Function with Return Type
const printLastName = (fName: string, lName: string): string => {
  return lName
}
console.log(printLastName('hassan', 'hanif'))

// void Type
const myFun = (): void => {
  console.log('My function')
  // return true // ERR
}

// any type
const myFun1 = (): any => {
  console.log('My function')
  return true
}

// never type - for never ending loops
const myFun2 = (): never => {
  while (true) {
    console.log('asd')
  }
}
// never type - for errors
const myFun3 = (): never => {
  throw new Error('Error')
}

// Anonymous Function Contextual Typing
const colors = ['red', 'green', 'purple', 'blue', 'yellow']

const upperColors = colors.map((color) => {
  return color.toUpperCase()
})
console.log(upperColors)

// !!!!!!! Objects !!!!!!!

const myObj: { x: number; y: number } = { x: 55, y: 40 }

// Function accepting object as an argument
const printObj = (obj: { x: number; y: number }) => {
  console.log(obj.x, obj.y)
}
printObj(myObj)

// Function with Object Return type
const printObj1 = (x: number, y: number): { x: number; y: number } => {
  return { x: 5, y: 6 }
}

// Excess Properties

// printObj({x: 53, y:44, z:55}) // Err
const myObj1 = { x: 53, y: 55, z: 66 }
printObj(myObj1)

// Type Alias

type Coordinates = {
  x: number
  y: number
}

const addCoordinates = (obj: Coordinates): Coordinates => {
  // const newCoordinates: Coordinates = { x: obj.x + 50, y: obj.y + 50 }
  // return newCoordinates
  return { x: obj.x + 50, y: obj.y + 50 }
}

// Nested Objects
const book: {
  name: string
  author: string
  sales: number
  published: number
  details: { pages: number; genre: string }
} = {
  name: 'Atomic Habits',
  author: 'James Clear',
  sales: 250000,
  published: 2018,
  details: { pages: 306, genre: 'Self-Help' },
}
// Using Type
type Book = {
  name: string
  author: string
  sales: number
  published: number
  details: { pages: number; genre: string }
}
const book1: Book = {
  name: 'Ikigai',
  author: 'Hector Garcia',
  sales: 450000,
  published: 2016,
  details: { pages: 220, genre: 'Self-Help' },
}

// Function w/ nested object as an argument
const getBookName = (book: {
  name: string
  author: string
  sales: number
  published: number
  details: { pages: number; genre: string }
}): string => {
  return book.name
}

// Function w/ nested object as an argument using Type Alias
const getNumberofBookSales = (book: Book): number => {
  return book.sales
}

// Optional properties
type Customer = {
  name: string
  age: number
  address?: string
}

const customer1: Customer = {
  name: 'Hassan',
  age: 22,
}

// Readonly Modifier
type User = {
  readonly id: number
  username: string
  email: string
}
const user1: User = {
  id: 1,
  username: 'hassancodess',
  email: 'hassan@gmail.com',
}

// user1.id = 423 // ERR
console.log(user1.id)

// Intersection Type

type Person = User & Customer
const p1: Person = {
  id: 2,
  name: 'hassan',
  username: 'hassancodess',
  age: 22,
  email: 'hassan@gmail.com',
}

// Intersection Type with extended properties

type CustomPerson = User &
  Customer & {
    isAlive: boolean
  }
const p2: CustomPerson = {
  id: 2,
  name: 'hassan',
  username: 'hassancodess',
  age: 22,
  email: 'hassan@gmail.com',
  isAlive: true,
}
console.log(p2)
export {}
