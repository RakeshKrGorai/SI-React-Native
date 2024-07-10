function SignUp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  console.log(name);
  console.log(email);
  console.log(pass);

  alert(
    `Welcome ${name} to our platform. Your account has been successfully created.`
  );

  window.location.href = "./login.html";
}

function LogIn() {
  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;
  var userName = "Rakesh";

  if (userEmail === "rakesh.k.gorai@gmail.com" && userPass === "helloworld") {
    alert(`Welcome ${userName}`);
    window.location.href = "./home.html";
  } else {
    alert("User not found");
  }
}
