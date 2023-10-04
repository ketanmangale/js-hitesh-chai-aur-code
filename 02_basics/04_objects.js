 const tinderUser = new Object() // Define an  object
//const tinderUser = {} // simple way to Define an  object
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name="Ketan"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser ={
    email: "ketan@gmail.com",
    fullname: {
        usernfullname:{
             firstname:"ketan",
             lastname:"Mangale"
        }
    }
}

// console.log(regularUser["fullname"]["usernfullname"]["firstname"]);
// console.log(regularUser.fullname.usernfullname.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3= {obj1,obj2} //does not meger two object

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}  //Easy wayt to merger objects

// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));   //returns all keys in an array. 
// console.log(Object.values(tinderUser));   //returns all values in an array. 
// console.log(Object.entries(tinderUser));   //returns all key-values in an array.  [ [ 'id', '123abc' ], [ 'name', 'Ketan' ], [ 'isLoggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isLoggedIn')); // To check if property (key) exists or not



//---------------Destructure an object----------------------------

const course = {
    courseName:"JS in hindi",
    price : "1000",
    CourseInstructor: "Hitesh"
}

const {CourseInstructor} = course //Extract CourseInstructor from object course
const {CourseInstructor: Instructor} = course //Extract CourseInstructor from object course and assigned Different name

console.log(CourseInstructor);
console.log(Instructor);

// {
//     "name":"Ketan",
//     "coursename":"js in hindi",
//     "price":"free"
// }

