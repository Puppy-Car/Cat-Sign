func ReLoad() {
  var ReLogin = confirm("Re-Login?")
  if ((ReLogin) == true) {
    window.location.reload()
  }
}
  

var UserList1 = ["Meow Meow", "Cat"]
var UserList2 = ["Meow", "at"]

var Password1 = ["Meow Meow", "Cat"]
var Password2 = ["Cat", "Meow Meow"]

alert("Please Login")
var User = prompt("Please enter your username, Meow!")

if (User_List.includes(User)) {
  var Password = prompt("Please enter your password, Meow!")
  if (Password1.includes(Password) || Password2.includes(Password)) {
    alert("Welcome, Meow!!!")
  }
  else {
    alert("Wrong Password, Meow")
    ReLoad()
  }
}
else {
  alert("Oh, Meow. We cannot see your Meow Account in the Meow List")
  ReLoad()
}
