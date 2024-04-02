// The reduce() method of Array instances executes a user-supplied "reducer" callback function 
// on each element of the array, in order, passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.

const myNums = [1, 2, 3]
//const mytotal = myNums.reduce((acc,item) => { console.log(`acc : ${acc} - item : ${item}`); return acc+item},0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);