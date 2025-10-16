 window.addEventListener('load', function() {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });



let myForm = document.getElementById("myRegisterForm");
console.log(myForm);
myForm.addEventListener("submit", function (event) {
let password = document.getElementById("exampleInputPassword1");
let confirm = document.getElementById("confirmPassword1");
if (password.value !== confirm.value) {
    confirm.setCustomValidity("كلمة المرور غير صحيحة ");
    }
else {
    confirm.setCustomValidity("");
    }
    if (!myForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
        myForm.classList.add("was-validated")
} )






