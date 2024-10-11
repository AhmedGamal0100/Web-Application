var managerData = [];
var signupSubmitButton = document.querySelector(".Signup-Submit-btn");
let flag = false;

if (localStorage.getItem("managerData")) {
    managerData = JSON.parse(localStorage.getItem("managerData"))
}

// signupSubmitButton.onclick = () => {
signupSubmitButton.addEventListener("click", () => {

    if (
        document.querySelector(".fName-signup").value != "" &
        document.querySelector(".sName-signup").value != "" &
        document.querySelector(".userName-signup").value != "" &
        document.querySelector(".password-signup").value != "" &
        document.querySelector(".doBirth-signup").value != "" &
        document.querySelector(".email-signup").value != "" &
        document.querySelector(".loc-city-signup").value != "" &
        document.querySelector(".loc-district-signup").value != ""
    ) {
        for (let i = 0; i < managerData.length; i++) {
            if (document.querySelector(".userName-signup").value === managerData[i].managerUsername) {
                flag = true;
            }
        }

        console.log(flag);

        if (flag == false) {
            const input = {
                managerFirstName: document.querySelector(".fName-signup").value,
                managerSecondName: document.querySelector(".sName-signup").value,
                managerUsername: document.querySelector(".userName-signup").value,
                managerPassword: document.querySelector(".password-signup").value,
                managerDateOfBirth: document.querySelector(".doBirth-signup").value,
                managerEmail: document.querySelector(".email-signup").value,
                managerLocCountry: document.querySelector(".loc-country-signup").value,
                managerLocCity: document.querySelector(".loc-city-signup").value,
                managerLocDistrict: document.querySelector(".loc-district-signup").value,
            }
            managerData.push(input);
            localStorage.setItem("managerData", JSON.stringify(managerData));

            document.querySelector(".fName-signup").value = '';
            document.querySelector(".sName-signup").value = '';
            document.querySelector(".userName-signup").value = '';
            document.querySelector(".password-signup").value = '';
            document.querySelector(".doBirth-signup").value = '';
            document.querySelector(".email-signup").value = '';
            document.querySelector(".loc-city-signup").value = '';
            document.querySelector(".loc-district-signup").value = '';

            window.open("Index -1- Login.html", "_self");
        }
        else {
            document.querySelector(".userName-signup").value = '';
            alert("Username is already exist!");
            flag = false;
        }
    }
    else {
        alert("Missing Inputs!");
    }

})


