// function sayName(){
// console.log("K");
// console.log("E");
// console.log("T");
// console.log("A");
// console.log("N");
// }

// sayName         //function reference
// sayName()       // function execution

//---------------------------------------------------------------------------------

// function addTwoNumbers(num1,num2) //num1 and num2 are parameters
// {
//     console.log(num1+num2); 
// }

// addTwoNumbers(5,6)   // function call with passing arguments

//------------------------------------------------------------------------

// function addTwoNumbers(num1,num2) //num1 and num2 are parameters
// {
//     return num1+num2;   // return addition of num1 and num2 to caller
// }

// const result = addTwoNumbers(3,5)   //function call

// console.log(result);        // print returned value stored in result

//--------------------------------------------------------------------------

// function calCartPrice(...num1)
// {
//     return num1
// }

// console.log(calCartPrice(100,1002,2300,3443));  //returns array of arguments -> [ 100, 1002, 2300, 3443 ]

// function calCartPrice1(val1,val2,...num1)
// {
//     return num1
// }

// console.log(calCartPrice1(100,1002,2300,3443)); //returns array of arguments with last two values -> [2300, 3443]

//------------------------------------------------------------------

// const user ={
//     username:"Ketan",
//     price:199
// }

// function handleObject(anyobject)
// {
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
// }

// handleObject(user)

// handleObject({
//     username:"Nisha",
//     price:399
// })

//-----------------

// const myNewArray = [200,400,600,800]

// function returnSecondValue(getArray)
// {
//     return getArray[1]
// }

// console.log((returnSecondValue(myNewArray)));

// console.log(returnSecondValue([200,400,600,800]));
