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

f1()
// f2()

// definition
function f1 () {
  console.log('Hello 1')
}

const f2 = function () {
  console.log('Hello 2')
}

// f1()
f2()

// console.log(f1())
// console.log(f2())