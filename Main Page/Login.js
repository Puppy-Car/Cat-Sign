var User_List = ["Meow Meow", "Cat"]
var Password1 = ["Meow Meow", "Cat"]
var Password2 = ["Cat", "Meow Meow"]

alert("Please Login")
var User = prompt("Please enter your username, Meow!")
if (User_List.contains(User)) {
  var Password = prompt("Please enter your password, Meow!")
  if (Password1.includes(Password) || Password2.includes(Password)) {
    alert("Welcome, Meow!!!")
  }
}
