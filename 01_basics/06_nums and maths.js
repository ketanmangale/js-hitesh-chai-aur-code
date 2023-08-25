const score = 300
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toFixed(2))

const otherNumber = 125.2155

console.log(otherNumber.toPrecision(3))

const hundreds = 100000000 
console.log(hundreds.toLocaleString('en-IN'))


//=========================Maths===========================

console.log(Math)

console.log(Math.abs(-235))
console.log(Math.round(4.7))
console.log(Math.ceil(4.7))
console.log(Math.floor(4.7))
console.log(Math.sqrt(36))
console.log(Math.min(45,46,4346,7656,3565))
console.log(Math.max(45,46,4346,7656,3565))
console.log((Math.random()*10)+1)
console.log((Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)