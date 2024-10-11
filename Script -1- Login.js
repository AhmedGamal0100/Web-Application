var emailLogin = document.querySelector("#lbl_user_login");
var userPassLogin = document.querySelector("#lbl_pass_login");
var loginBtn = document.querySelector(".btn_submit_login");

if (localStorage.getItem("managerData")) {
    var managerDataArray = JSON.parse(localStorage.getItem("managerData"));
}

loginBtn.addEventListener("click", function () {
    let flag = false;

    // Validate The Username
    if (emailLogin.value.length > 0) {

        // Admin index(0) Validation
        if (emailLogin.value !== managerDataArray[0].managerUsername & userPassLogin.value !== managerDataArray[0].managerPassword) {

            // Domain Validation
            if (!emailLogin.value.match("@Company.com")) {
                alert("- Invalid Email - Must contain @Company.com -");
            }

            // Account Validation
            else {
                for (var i = 0; i < managerDataArray.length; i++) {
                    if (emailLogin.value == managerDataArray[i].managerUsername + "@Company.com" & userPassLogin.value == managerDataArray[i].managerPassword) {
                        flag = true;
                        window.open("Index -4- Dashboard.html", "_self");
                        emailLogin.value = '';

                    }
                }
                if (flag == false) {
                    if (confirm("Invalid Accound Want to create new acc?")) {
                        window.open("Index -2- Signup.html", "_self");
                        emailLogin.value = '';
                    }
                }
            }
        }

        // If admin
        else {
            alert("Welcome Admin " + managerDataArray[0].managerFirstName)
            window.open("Index -5- Admin Dashboard.html", "_self");
            emailLogin.value = '';
        }
    }
})

