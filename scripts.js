document.querySelector(".bars-menu").addEventListener("click", () => {
  document.querySelector(".nav-items").classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav-items").classList.toggle("active");
  });
});
document.getElementById("password").onblur = function () {
  console.log(this.value);
};

window.onload = pageLoad;
function pageLoad() {
  var Form = document.getElementById("form");
  Form.onsubmit = validate;
}
function validate() {
  var check = true;
  var Fname = document.getElementById("fname").value;
  var Lname = document.getElementById("lname").value;
  var mail = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;


  
  if (!Fname.match(/^[A-Za-z]+$/)) {
    alert("only letters  allowed in name field");
    check = false;
  }
  if (!Lname.match(/^[A-Za-z]+$/)) {
    alert("only letters  allowed in name field");
    check = false;
  }
  if (!mail.match(/^[a-zA-z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/)) {
    alert("Email is Not Valid");
    check = false;
  }
  if (!password.match(/^[A-Z](?=.*[0-9])(?!.]\s)(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&*\u0621-\u064A]{7}$/)){
    alert("password is Not Valid , check the conditions !");
    check = false;
  }
  
  
  if (!phone.match(/^[0-9]{11}$/)) {

    alert("Phone is not valid");
    check = false;
  }
  if (check == true) {
    alert('thanks ' + Fname + " " + Lname + ' for join to us , home page !');
    window.location.href = 'index.html';
  }
  return check;
}
