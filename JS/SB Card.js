function ReLoad() {
  if (confirm("Re-login?")) {
    location.reload();
  }
}

var User1 = ["Old Man", "Old Woman"];
var Pass1 = ["OM", "OW"];

alert("Kill yourself Bad Guy!!!");
alert("You can login but you will die!!!");

var User = prompt("Enter Username:");
if (User1.includes(User)) {
  alert("Username Approved");
  
  var Pass = prompt("Enter Password:");

  var P1 = Pass1[User1.indexOf(User)];
  if (Pass == P1) {
    alert("Password Approved\n\nAccount Approved");
    alert("Welcome Trash " + Pass + " go to d**!");
  } else {
    alert("Password Not Approved");
    ReLoad();
  }
} else {
  alert("Username Not Approved");
  ReLoad();
}
