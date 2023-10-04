const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNmbers=myNum.map((num)=> num+10)       //It will add 10 to each value from array myNum and return(implicit return) to newMumbers

const NewNum1 = myNum.map((num)=>num*10).map((num)=>num+1)      //num*10 will passed to next map function so (num*10)+1

const newNum2 = myNum.map((num)=> num*10).map((num)=> num+1).filter((num)=> num<50)

console.log(newNum2);

