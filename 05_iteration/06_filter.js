// The filter() method of Array instances creates a shallow copy of a portion of a given array, 
//filtered down to just the elements from the given array that pass the test implemented by the provided function.

const coding = ['js','py','ruby','rail','swift']

// value = coding.forEach((item) => {console.log(item); return item}) // It will not return anything

// console.log(value) //prints undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const values = myNums.filter((num) => (num > 4))  // filter function does return the value
// console.log(values); //prints 5 6 7 8 9 10

const newNums = []
myNums.forEach((num) => {
    if(num > 4)
       newNums.push(num)
})  // alternate way to update the array without returning values

console.log(newNums); // prints 5 6 7 8 9 10

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter((item) => (item.genre == 'Fiction'))

   userbooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

  console.log(userbooks);