console.log("Gaurav")
var accountID = 2
var accountID = 3  // We can redclare and reassign a variable using var
const Person_name = "Gaurav" //const must be initialized during declration unlike let and var

let a
var b
console.log(a)
console.log(b)
/*  By Default both will be assigned as undefined */

function swim() {

    let account_city = "Surat" 
    // let account_city = "Mumbai"  Not allowed, cannot redeclare variable using let 
    account_city = "Mumbai"  // Allowed, We can reassign values 
   console.log(accountID)
   console.log(account_city)
}

swim()


/*
Important Notes:
    Var is globally scoped while let & const are block scoped
    Var can be updated and redeclare within its scope
    let can be updated but not redeclare
    const can neither be updated nor be redclared
    var and let variables are intialized with undefined, const are not intialized
*/
