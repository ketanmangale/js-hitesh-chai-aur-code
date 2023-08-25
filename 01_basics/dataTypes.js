"use strict";

//alert(3+3) //We are using nodejs not browser
//number = 1034 
//bigint = 135435345352
//string = ""
//boolean = true/false
//null = standalone value
//undefiend = not defined 

console.log(typeof null) // Type is Object
console.log(typeof undefined)      // type is undefined

//Symbol
let id=Symbol('123')
let anotherId = Symbol('123')
console.log(id === anotherId)

//bigInt
const bigNumber = 1236598458964n
console.log(typeof bigNumber)



//Non Primitives
//Arrays
const heros = ['shaktiman','aryaman','doga']
console.log(typeof heros)

//Object
console.log(typeof {name:'Ketan',age: 28})

//Function

console.log(typeof function(){console.log("Inside a function")})

//=====================================================================================

//Stack(Primitive) , Heap(Non-primitive)

let myYoutubeName="Mychannel"

let anotherName=myYoutubeName

anotherName="Channel2"

console.log(myYoutubeName)


let userOne= {
    name:"Ketan",
    age:28
}

let userTwo = userOne


userTwo.age = 30

console.log(userOne)
console.log(userTwo)