let managerEmail = document.querySelector(".email");
let mainPass = document.querySelector(".pass-input");
let confirmPass = document.querySelector(".pass-confirmInput");
let inputButton = document.querySelector(".input-btn");
let showButton = document.querySelector(".showPass-btn");
let resetButton = document.querySelector(".input-btn-submit")
let flag = false;

mainPass.disabled = true;
confirmPass.disabled = true;


if (localStorage.getItem("managerData")) {
    var managerDataArray = JSON.parse(localStorage.getItem("managerData"));
}

showButton.addEventListener("click", function () {
    let managerPassword;
    if (managerEmail.value == "") {
        alert("Email is Required!")
    }
    else {
        for (let i = 0; i < managerDataArray.length; i++) {
            if (managerEmail.value === managerDataArray[i].managerUsername + "@Company.com") {
                managerPassword = managerDataArray[i].managerPassword;
                flag = true;
            }
        }
        if (flag == true) {
            managerEmail.value = "";
            alert("Your Password Is: " + managerPassword);
            window.open("Index -1- Login.html", "_self");
        }
        else {
            alert("Company Email Doesn't Match!");
        }
    }
})

inputButton.addEventListener("click", function () {
    mainPass.disabled = false;
    confirmPass.disabled = false;
    this.style.display = "none";
    showButton.style.display = "none";
    resetButton.style.display = "flex";
})

resetButton.addEventListener("click", function () {
    let flag = false;
    let managerIndex;
    if (managerEmail.value == '') {
        alert("Write Company Email!");
    }
    else if (managerEmail.value != '') {
        for (let i = 0; i < managerDataArray.length; i++) {

            if (managerEmail.value === managerDataArray[i].managerUsername + "@Company.com") {
                flag = true;
                managerIndex = i;
            }
        }
        if (flag == false) {
            alert("Email doesn't exist!")
        }
        else {
            if (mainPass.value == "") {
                alert("Write a new password!");
            }
            else if (confirmPass.value == '') {
                alert("Confirm your password!");
            }
            else {
                if (confirmPass.value != mainPass.value) {
                    alert("Passwords do not match!");
                    mainPass.value = "";
                    confirmPass.value = "";
                }
                else {
                    managerDataArray[managerIndex].managerPassword = mainPass.value;
                    localStorage.setItem("managerData", JSON.stringify(managerDataArray));
                    alert("Successful Password Reset ✔️");
                    window.open("Index -1- Login.html", "_self");
                }
            }
        }
    }
})
