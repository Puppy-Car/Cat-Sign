function ReLoad() {
  var ReLogin = confirm("Re-Login?")
  if (ReLogin) {
    window.location.reload()
  }
}
  

var UserList1 = ["Meow Meow", "Cat"]
var UserList2 = ["Meow", "at"]

var Password1 = ["Meow Meow", "Cat"]
var Password2 = ["Cat", "Meow Meow"]

alert("Please Login")
var User = prompt("Please enter your username, Meow!")

if (UserList1.includes(User) || UserList2.includes(User)) {
  var Password = prompt("Please enter your password, Meow!")

  var U1 = UserList1.indexOf(User)
  var U2 = UserList2.indexOf(User)
  
  if (U1 == -1) {
    var U = U2
  }
  else {
    var U = U1
  }
  
  var P1 = Password1[U]
  var P2 = Password2[U]
  
  alert("U: " + U + "\nP1: " + P1 + "\nP2: " + P2)
  
  if (Password == P1 || Password == P2) {
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
