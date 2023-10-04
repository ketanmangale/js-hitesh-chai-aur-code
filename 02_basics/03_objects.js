//singleton
//object.create

//object literals
const mysymbol = Symbol("Key1") // Define symbol and use it in object

const Jsuser = {
    name:"Ketan",
    "full name":"Ketan Mangale",
    age:28,
    location:"Pune",
    email:"Ketan@gmail.com",
    [mysymbol]: "Mysyboml1",             //symtax to use defined symbol in an object
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mysymbol])           //Syntax to access a symbol in an object

//console.log(Jsuser)
//Object.freeze(Jsuser)               //to freeze the object from changing it
//Jsuser.email = "Ketan@linkdin.com"
//console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello from greeting key function");
}

Jsuser.greetingTwo = function(){
    console.log(`Hello from greetingTwo key function and my name is ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());