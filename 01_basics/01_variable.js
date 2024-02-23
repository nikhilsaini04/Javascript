const accountID=1234
let accountEmail="nikhilsainiimt@gmail.com"
var accountPassword="3456"
/*
Prefer not to use var
because of issue of block scope and functional scop
*/
let accountState;
accountCity="Greater Noida"

//accountID=21  Not allowed
accountCity="Bulandshahr"  
console.log(accountID) 
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])   