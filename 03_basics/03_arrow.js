// const user = {
//     username: "Ketan",
//     price : 999,

//     welcomeMessage: function(){
//         // console.log(`${this.username} welcome to website`);
//     }
// };

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);       //It will print empty object
//===================================================================

// function chai(){
//     let name="Ketan"
//     console.log(this.name);      //This will print undefined ("this" does not work in function)
// }

// chai()      

//---------------------------------------------------------------------------
// const chai = function (){
//     let name="Ketan"
//     console.log(this.name);      //This call will print undefined ("this" does not work in function)
// }

// chai()      
//-------------------------------------------------------


// const chai = () =>{
//     let name="Ketan"
//     console.log(this.name);      //This call will print undefined (this does not work in function)
// }

// chai()           

//------------------------------------------

// const addTwo = (num1,num2) => {
//     return num1+num2
// }                            //return addion of two numbers

// console.log(addTwo(5,6));       

//---------------------------------------------

// const addTwo = (num1,num2) => num1+num2     //  implicit return num1+num2
// console.log(addTwo(5,6));

// const retObject = () => ({usernam:"Ketan"})     //return object to caller
// console.log(retObject());


//-----------Immediately Invoked Function Expresssions (IIFE)


// (function chai() {               //Named IIFE
//     console.log("DB CONNECTED");
//   })();         //Semicolon is required

//-------------------------------------------------------------------------------------------

// (function () {                  //Unnamed IIFE
//     console.log("DB CONNECTED");
//   }
//   )();         //Semicolon is required


//--------------------------------------------------------------------------------------------

//   (() => {                   //Arrow function
//     console.log("DB CONNECTED in Arrow function");
//   })();          //Semicolon is required

//----------------------------------------------------------------------------------------------

//   ((name) => {                  //Arrow function with parameter
//     console.log(`DB CONNECTED in Arrow function and name is ${name}`);
//   })("Ketan");                     //Passed argument

