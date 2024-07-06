const accountId = 11223344
let accountEmail = "rishabjain1307@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState

// accountId = 2 / cannot be done / constant cant be changed

accountEmail = "rishab@gmail.com"
accountPassword = "888"
accountCity = "Bhopal"

console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountId);
console.log(accountState);

/*
Prefer not to use VAR
because of issues in block scope and functional scope
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])