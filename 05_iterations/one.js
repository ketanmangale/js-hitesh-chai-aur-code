// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     console.log(element);
    
// }


//-----------------------------------------------------
//nestest loop

// for (let i = 1; i <=10; i++) {
//     console.log(`Outer value :  ${i}`);
//     for (let j = 1; j <=10; j++) {
//         console.log(i+'*'+j +'='+ i*j );
//     }    
// }

//------------------------------------------------------

//  for of

// const arr =[1,2,3,4,5,6]
// for (const val of arr) {
//     console.log(val)
// }

// const greetings="Hello world!"
// for (const i of greetings) {
//     console.log(`Each char is ${i}`);
// }

//  Maps and iteration on map

const map = new Map()

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

// console.log(map);       //map will have unique values

// for (const [key,value] of map) {
//     // console.log(key);
//     console.log(`Key is ${key} and value is ${value}`);
    
// }

//-----------------------------------------------------------

//for of does not work on object for in works for object
