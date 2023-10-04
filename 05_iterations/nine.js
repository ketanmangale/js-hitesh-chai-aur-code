// const myNums = [1,2,3,4,,5,6,7,8,9,10]

// const result = myNums.reduce((acc,currval)=>{
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc+currval},0)


// console.log(result);

//==================================================================

const shoppingCart = [
    {
        itemName: "JS",
        price: 999
    },
    {
        itemName: "MOBILE COURSE",
        price: 2999
    },
    {
        itemName: "DSA",
        price: 1999
    },
    {
        itemName: "PYTHON",
        price: 3999
    },
]

const addPrice = shoppingCart.reduce((acc,currval)=> acc+currval.price,0)

console.log(addPrice);