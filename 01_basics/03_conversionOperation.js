let score = 33
let score2 = "33"
let score3 = "33abc"
let score4 = null
let score5 = undefined

console.log(typeof(score));
console.log(typeof(score2));
console.log(typeof(score3));

let score2InNo = Number(score2)
let score3InNo = Number(score3)
let score4InNo = Number(score4)
let score5InNo = Number(score5)

console.log(typeof(score2InNo));
console.log(typeof(score3InNo));

console.log(score2InNo);
console.log(score3InNo); // it showes that it is converted in a number but when we print it it shows NaN(Not a number) , be Careful
console.log(score4InNo); // null converts to 0
console.log(score5InNo); // undefined converts to NaN

/*
"33" => 33
"33abc" => NaN
null => 0
undefined => NaN
true => 1  false => 0
*/

let isLoggedIn = 1
let BooleanIsLoggedIn = Boolean(isLoggedIn)

console.log(BooleanIsLoggedIn)

/*
1 => true , 0 => false
"" => false
"Rishabh" => true
*/