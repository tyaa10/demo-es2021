// Primitive type
/* let s1 = 'Hello' // string
let s2 = ' JS!'
let s3 = s1
s3 += s2
console.log(s1)
console.log(s3)
// Reference type
let o1 = {
  text: 'Hello'
}
let o2 = {
  text: ' JS!'
}
let o3 = JSON.parse(JSON.stringify(o1)) // JSON.stringify(o1) - argument / parameter
o3.text += o2.text
console.log(o1)
console.log(o3)

o1.text = null
console.log(o1.text ? 'something' : 'nothing')
console.log(o1.text ?? 'nothing')

// Switch-Case Example
// const n = 0 */

/* for (let n = 0; n < 200; n++) {
  let result = ''
  let n10 = n % 10
  switch (n10) {
    case 2:
    case 3:
    case 4:
      result = 'ы'
      break
    case 1:
      result = 'а'
  }
  console.log(n, `ворон${result}`)
} */

// row loop
/* ROW_LOOP : for (let i = 0; i < 11; i++) {
  // column (row elements) loop
  for (let j = 0; j < 11; j++) {
    // the first row: print columns header
    let toPrint
    if (i === 0) {
      toPrint = j
    } else if (j === 0) {
      toPrint = i
    } else {
      toPrint = i * j
    }
    while (toPrint.toString().length < 5) {
      toPrint += ' '
    }
    process.stdout.write(toPrint)
    if (i === 5 && j === 5) {
      break ROW_LOOP
    }
  }
  // new line
  process.stdout.write('\n')
}

process.stdout.write('\n')
process.stdout.write('\n') */

/* Functions */

// f1()
// f2()

// definition
/* function f1 () {
  console.log('Hello 1')
}

const f2 = function () {
  console.log('Hello 2')
} */

// f1()
// f2()

// console.log(f1())
// console.log(f2())

/* const f1 = function () {
  console.log('Hello 1')
  console.log(this)
}

const f2 = () => {
  console.log('Hello 2')
  console.log(this)
}

f1()
f2()

console.log(this.x) */

const person = {
  name: 'John',
  age: 20 /* ,
  print: function () {
    console.log(`Person {name: ${this.name}, age: ${this.age}}`)
  } */
  ,
  print: () => {
    console.log(`Person {name: ${this.name}, age: ${this.age}}`)
  }
}

// person.print()

/* function universal() {
  for (let idx = 0; idx < arguments.length; idx++) {
    console.log(`Argument {index: ${idx}, arg: ${arguments[idx]}}`)
  }
}

universal('Hello', 'JS') */
// rest operator
function universal(a, b, ...args) {
  // console.log(args)
  /* for (let idx = 0; idx < args.length; idx++) {
    console.log(`Argument {index: ${idx}, arg: ${args[idx]}}`)
  } */
  console.log(a, b)
  args.forEach((arg, idx) => {
    console.log(`Argument {index: ${idx}, arg: ${arg}}`)
  })
  return [a, b, ...args] // spread
}

// const result = universal('Hello', 'JS', '!')
/* const result = universal(2, 3, 4)
console.log('***')
function ext(x, y) {
  return Math.pow(x, y)
}
console.log(result)
console.log('***')
// spread
console.log(ext(...result))
// destructuring
const [x, y, z] = universal(2, 3, 4) // Array === [2, 3]
console.log(x, y, z) // Standalone Variables */

// Closures

const parent = () => {
  // parent context
  const state = {
    count: 0
  }
  // child
  return () => {
    return ++state.count
  }
}

/* const child = parent()
for (let i = 0; i < 5; i++) {
  console.log(child())
} */

// Arrays, Iterators

// const numbers = [-1, 10, 3, 40, 52, 7, 0, 9, 0]
/* numbers.sort((a, b) => b - a)
  .filter(n => n > 0)
  .map(n => n * n) // mapping
  .forEach(n => console.log(n)) */

  /* const sum = numbers.sort((a, b) => b - a)
                .filter(n => n > 0)
                .map(n => n * n)
                .reduce((result, current) => result += current)
  console.log((sum / numbers.length).toFixed(2)) */

  const people = [
    {
      name: 'John',
      age: 30
    },
    {
      name: 'Bill',
      age: 32
    },
    {
      name: 'Mary',
      age: 20
    }
  ]

  const sum = people.filter(p => p.age <= 30)
                // .map(p => p.age)
                .reduce((result, current) => result += current.age, 0)
  // console.log((sum / people.filter(p => p.age <= 30).length).toFixed(2))

  // Создать массив объектов товаров: название, цена за единицу, количество единиц в наличии
  // При помощи map получить массив объектов, у которых будет название и полная стоимость,
  // равная произведению цены единицы на количество
  // Отфильтровать только те, у которых полная стоимость входит в диапазон, например, от 10 до 200

  const items = [
    {
    name: "firstname",
    price: 15,
    quantity: 4      
  },
   {
    name: "secondname",
    price: 35,
    quantity: 1     
  },
    {
    name: "thirdname",
    price: 1,
    quantity: 10     
  },
     {
    name: "fourthname",
    price: 7,
    quantity: 2      
  },
      {
    name: "fifthname",
    price: 25,
    quantity: 3     
    }
    
]
  
const multiply = items.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
})).filter(item => (item.totalPrice >= 10 && item.totalPrice <= 200 ))
  .sort((item1, item2) => item1.name.localeCompare(item2.name))


// console.log(multiply)

function mySort (compare) {
  // list = JSON.parse(JSON.stringify(this))
  list = this.map(item => item)
  let isSorted
  do {
    isSorted = true
    for (let i = 0; i < list.length - 1; i++) {
      const currentItem = list[i]
      const nextItem = list[i + 1]
      if (compare(currentItem, nextItem) < 0) {
        list[i] = nextItem
        list[i + 1] = currentItem
        isSorted = false
      }
    }
  } while (!isSorted)
  return list
}

Array.prototype.mySort = mySort

// TDD

const items2 = items.mySort((a, b) => a.quantity - b.quantity)

for (let i = 0; i < items2.length - 1; i++) {
  const currentItem = items2[i]
  const nextItem = items2[i + 1]
  if (currentItem.quantity - nextItem.quantity < 0) {
    throw new Error(`Element ${i} (${currentItem}) less than element ${i + 1} (${nextItem})`)
  }
}

const items3 = items.mySort((a, b) => b.name.localeCompare(a.name))

for (let i = 0; i < items3.length - 1; i++) {
  const currentItem = items3[i]
  const nextItem = items3[i + 1]
  if (nextItem.name.localeCompare(currentItem.name) < 0) {
    throw new Error(`Element ${i} (${currentItem}) less than element ${i + 1} (${nextItem})`)
  }
}

console.log('Success')

/* function hello () {
  console.log('Hello Prototype!')
}

function printFirst () {
  console.log(this)
}

Array.prototype.hello = hello
Array.prototype.printFirst = printFirst

items.hello()
items.printFirst() */