var User1 = ["Shit Old Man"]
var Pass1 = ["Died"]

alert("Kill yourself Bad Guy!!!");
alert("You can login but you will die!!!");

var User = prompt("Enter Username:");
if (User1.includes(User)) {
  alert("Username Approved");
  
  var Pass = prompt("Enter Password:");

  var P1 = Pass1[User1.indexof(User)];
  if (Pass == P1) {
    alert("Password Approved\n\nAccount Approved");
  }
}
