function ReLoad() {
  if (confirm("Re-login?")) {
    location.reload();
  }
}

function SB() {
  alert("You are SB!!!");
}

var BSB = document.getElementById("SB");
BSB.disabled = true;

var User1 = ["Old Man", "Old Woman"];
var Pass1 = ["OM", "OW"];

alert("K**l yourself Bad Guy!!!");
alert("You can login but you will d**!!!");

var User = prompt("Enter Username:");
if (User1.includes(User)) {
  alert("Username Approved");
  
  var Pass = prompt("Enter Password:");

  var P1 = Pass1[User1.indexOf(User)];
  if (Pass == P1) {
    alert("Password Approved\n\nAccount Approved");
    alert("Welcome Trash " + User + " go to d**!");
    BSB.disabled = false;
  } else {
    alert("Password Not Approved");
    ReLoad();
  }
} else {
  alert("Username Not Approved");
  ReLoad();
}
