// Array
const activeUsers: string[] = ['Anya', 'Takina', 'Chisato', 'Shin']
activeUsers[5] = 'Nazuna'

console.log(activeUsers)

// Another Array Syntax

const restrictedUsers: Array<string> = ['Levi', 'Mikasa']
restrictedUsers.push('Erwin')

// Custom Type Array

type User = {
  name: string
  email: string
}

const usersArray: User[] = []
const user1: User = { name: 'Anya', email: 'anya@gmail.com' }
const user2: User = { name: 'Takina', email: 'takina@gmail.com' }
usersArray.push(user1, user2)
console.log(usersArray)

// Multi Dimensional Arrays

const names: string[][] = [
  ['Takina', 'Chisato', 'Majima'],
  ['Takina', 'Chisato', 'Majima'],
  ['Takina', 'Chisato', 'Majima'],
]

// Type inference
let anya = activeUsers[0]
// anya is a string because the first element of activeUsers is a string

// Storing Mixed Values
const myArr = ['hehe', 23, false]

// Storing only strings and numbers
const numberStringArr: (string | number)[] = ['anya', 'chisato', 52]
