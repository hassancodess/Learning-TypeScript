'use strict'
class Person {
  // Static Fields
  static description = 'Lorem Ipsum'
  // Class Fields
  score = 0
  // Private Fields
  #numLives = 10
  // Constructor
  constructor(first, last) {
    console.log('Inside Constructor')
    this.first = first
    this.last = last
    this.#secret()
  }
  //   Getters
  get lives() {
    return this.#numLives
  }
  get fullName() {
    return `${this.first} ${this.last}`
  }
  //   Setters
  set lives(newLives) {
    if (newLives < 0) {
      console.log('new lives must be positive')
    } else {
      this.#numLives = newLives
    }
  }
  set fullName(newName) {
    const [first, last] = newName.split(' ')
    this.first = first
    this.last = last
  }
  // Methods
  taunt() {
    console.log('BOOYAH!!!')
  }
  loseLife() {
    this.#numLives -= 1
  }
  printLives() {
    console.log(this.#numLives)
  }
  #secret() {
    console.log('Private Method')
  }
}

const p1 = new Person('Hassan', 'Hanif')
// p1.taunt()
// console.log(p1.first, p1.last)

p1.printLives()
p1.lives = 50
p1.printLives()
// p1.printLives()
// p1.loseLife()
// p1.printLives()
// p1.printNumLives
// const p2 = new Person('Nawas', 'Faiz')
// p2.taunt()
// console.log(p2.first, p2.last)
