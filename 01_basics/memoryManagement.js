let myYoutubeName="Nikhil Saini"
let anotherChannelName=myYoutubeName
anotherChannelName="TechGuy45"
console.log(myYoutubeName)
console.log(anotherChannelName)
// primitive data type ----> Stack area 
//   copy of the variable not the reference 

let userOne={
    gamil: "nikhilsainiiimt@gmail.com",
    upiId: "7088703468@paytm"
}
let userTwo=userOne
userTwo.gamil="johnDoe123@yahoo.com"
console.log(userOne)
console.log(userTwo)
// Non- primitive ---> Heap Area
// reference of the obect or the direct access

