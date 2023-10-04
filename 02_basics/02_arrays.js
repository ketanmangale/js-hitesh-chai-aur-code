const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["Superman","Flash","Batmanman"]


//marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros) // Return a new array, it does not change marvel_heros

// console.log(marvel_heros)
// console.log(all_heros)


// const all_new_heros = [...marvel_heros,...dc_heros] //spread operator(...) which spreads all elements
// console.log(all_new_heros)


// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const usable_another_array = another_array.flat(Infinity)
// console.log(usable_another_array)


let score=100
let score1=101
let score2=102
console.log(Array.isArray("Ketan"))
console.log(Array.from("Ketan")) //create array of string
//console.log(Array.from({name:"Ketan"}))  //Need to provide key-value if keys arrays or values arrays should be generated
var abc=Array.from({name:"Ketan"})
console.log(abc)
console.log(Array.of(score,score1,score2)) // create an array of varibles