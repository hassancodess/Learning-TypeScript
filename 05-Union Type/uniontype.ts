// Union Type
let result: number | string
result = 'pass'
result = 10

// Function accepting Union Type (this is also type narrowing :p)
const add = (x: number | string, y: number | string) => {
  if (typeof x == 'number' && typeof y == 'number') {
    return x + y
  } else if (typeof x == 'string' && typeof y == 'string') {
    return x.concat(y)
  }
  throw new Error('Parameters are not of same type')
}
console.log(add('hassan', 'hanif'))
console.log(add(5, 6))

// Function acception Union Type w/ Type Narrowing
const calculateTax = (price: string | number, tax: number) => {
  if (typeof price == 'string') {
    price = parseFloat(price.replace('$', ''))
    return price * tax
  }
  return price * tax
}

console.log(calculateTax('$240', 0.5))
console.log(calculateTax(240, 0.5))

// Type Literals
let mood: 'Happy' | 'Sad' = 'Happy'

type DaysOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

let today: DaysOfWeek = 'Monday'
today = 'Thursday'
