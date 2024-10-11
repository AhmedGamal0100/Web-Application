// Side Nave Functions

document.querySelector(".sidenav-create").addEventListener("click", function () {
    document.querySelector(".create-options").classList.add("show-create-option");
    for (let m = 0; m < 5; m++) {
        document.querySelector(".home-sec").classList.remove("tab-sec-visible");
        document.querySelector(".dashboard-sec").classList.remove("tab-sec-visible");
        document.querySelector(".todolist-sec").classList.remove("tab-sec-visible");
        document.querySelector(".calender-sec").classList.remove("tab-sec-visible");
        document.querySelector(".profile-sec").classList.remove("tab-sec-visible");

        document.querySelector(".dashboard-sec").classList.add("tab-section-invisible");
        document.querySelector(".todolist-sec").classList.add("tab-section-invisible");
        document.querySelector(".calender-sec").classList.add("tab-section-invisible");
        document.querySelector(".profile-sec").classList.add("tab-section-invisible");

    }
})

Array.from(document.querySelectorAll(".nav-tabs")).forEach(i => {
    i.addEventListener("click", function () {
        for (let i = 0; i < Array.from(document.querySelectorAll(".nav-tabs")).length; i++) {
            if (Array.from(document.querySelectorAll(".nav-tabs"))[i].classList.contains("navTab-Selector")) {
                Array.from(document.querySelectorAll(".nav-tabs"))[i].classList.remove("navTab-Selector");
            }
        }
        i.classList.add("navTab-Selector");
    })
})

Array.from(document.querySelectorAll(".nav-tabs-icon")).forEach(x => {
    x.addEventListener("click", function () {
        document.querySelector(".nav-tabs-icon-create").children[0].children[0].children[0].classList.remove("icon-bg")
        for (let i = 0; i < Array.from(document.querySelectorAll(".nav-tabs-icon")).length; i++) {
            if (document.querySelectorAll(".nav-tabs-icon")[i].children[0].children[0].classList.contains("icon-bg")) {
                document.querySelectorAll(".nav-tabs-icon")[i].children[0].children[0].classList.remove("icon-bg")
            }
        }
        x.children[0].children[0].classList.add("icon-bg");
        document.querySelector(".create-options").classList.remove("show-create-option");
    }
    )
})

document.querySelector(".nav-tabs-icon-create").addEventListener("click", function () {
    for (let i = 0; i < Array.from(document.querySelectorAll(".nav-tabs-icon")).length; i++) {
        document.querySelectorAll(".nav-tabs-icon")[i].children[0].children[0].classList.remove("icon-bg")
    }
    document.querySelector(".nav-tabs-icon-create").children[0].children[0].children[0].classList.add("icon-bg")

    // if (document.querySelector(".nav-tabs-icon-create").children[0].children[0].children[0].classList.contains("icon-bg")) {
    //     document.querySelector(".nav-tabs-icon-create").children[0].children[0].children[0].classList.remove("icon-bg")
    // }
    // else {
    //     document.querySelector(".nav-tabs-icon-create").children[0].children[0].children[0].classList.add("icon-bg")
    // }
})

// -------------------------------------------------
// Home Functions

window.addEventListener("load", () => {
    document.querySelector(".home-sec").classList.add("tab-sec-visible");
    document.querySelector(".todolist-sec").classList.add("tab-section-invisible");
    document.querySelector(".dashboard-sec").classList.add("tab-section-invisible");
    document.querySelector(".calender-sec").classList.add("tab-section-invisible");
    document.querySelector(".profile-sec").classList.add("tab-section-invisible");
    Array.from(document.querySelectorAll(".nav-tabs"))[0].classList.add("navTab-Selector");
    document.querySelectorAll(".nav-tabs-icon")[0].children[0].children[0].classList.add("icon-bg")
})

Array.from(document.querySelectorAll(".nav-tabs-icon")).forEach(x => {
    x.addEventListener("click", function () {
        document.querySelector(".create-sec").style.display = "none"
        if (Array.from(document.querySelectorAll(".nav-tabs-icon")).indexOf(x) == 0) {
            document.querySelector(".home-sec").classList.add("tab-sec-visible")
            document.querySelector(".home-sec").classList.remove("tab-section-invisible");
            document.querySelector(".dashboard-sec").classList.add("tab-section-invisible");
            document.querySelector(".dashboard-sec").classList.remove("tab-sec-visible");
            document.querySelector(".todolist-sec").classList.add("tab-section-invisible");
            document.querySelector(".todolist-sec").classList.remove("tab-sec-visible");
            document.querySelector(".calender-sec").classList.add("tab-section-invisible");
            document.querySelector(".calender-sec").classList.remove("tab-sec-visible");
            document.querySelector(".profile-sec").classList.add("tab-section-invisible");
            document.querySelector(".profile-sec").classList.remove("tab-sec-visible");
        }
        else if (Array.from(document.querySelectorAll(".nav-tabs-icon")).indexOf(x) == 1) {
            document.querySelector(".home-sec").classList.remove("tab-sec-visible");
            document.querySelector(".home-sec").classList.add("tab-section-invisible");
            document.querySelector(".dashboard-sec").classList.add("tab-sec-visible");
            document.querySelector(".dashboard-sec").classList.remove("tab-section-invisible");
            document.querySelector(".todolist-sec").classList.add("tab-section-invisible");
            document.querySelector(".todolist-sec").classList.remove("tab-sec-visible");
            document.querySelector(".todolist-sec").classList.remove("tab-sec-visible");
            document.querySelector(".profile-sec").classList.add("tab-section-invisible");
            document.querySelector(".profile-sec").classList.remove("tab-sec-visible");
            document.querySelector(".calender-sec").classList.add("tab-section-invisible");
            document.querySelector(".calender-sec").classList.remove("tab-sec-visible");
        }
        else if (Array.from(document.querySelectorAll(".nav-tabs-icon")).indexOf(x) == 3) {
            document.querySelector(".home-sec").classList.remove("tab-sec-visible");
            document.querySelector(".home-sec").classList.add("tab-section-invisible");
            document.querySelector(".dashboard-sec").classList.remove("tab-sec-visible");
            document.querySelector(".dashboard-sec").classList.add("tab-section-invisible");
            document.querySelector(".todolist-sec").classList.add("tab-sec-visible");
            document.querySelector(".todolist-sec").classList.remove("tab-section-invisible");
            document.querySelector(".profile-sec").classList.add("tab-section-invisible");
            document.querySelector(".profile-sec").classList.remove("tab-sec-visible");
            document.querySelector(".calender-sec").classList.add("tab-section-invisible");
            document.querySelector(".calender-sec").classList.remove("tab-sec-visible");
        }
        else if (Array.from(document.querySelectorAll(".nav-tabs-icon")).indexOf(x) == 4) {
            document.querySelector(".home-sec").classList.remove("tab-sec-visible");
            document.querySelector(".home-sec").classList.add("tab-section-invisible");
            document.querySelector(".dashboard-sec").classList.remove("tab-sec-visible");
            document.querySelector(".dashboard-sec").classList.add("tab-section-invisible");
            document.querySelector(".todolist-sec").classList.remove("tab-sec-visible");
            document.querySelector(".todolist-sec").classList.add("tab-section-invisible");
            document.querySelector(".profile-sec").classList.add("tab-section-invisible");
            document.querySelector(".profile-sec").classList.remove("tab-sec-visible");
            document.querySelector(".calender-sec").classList.add("tab-sec-visible");
            document.querySelector(".calender-sec").classList.remove("tab-section-invisible");
        }
        else if (Array.from(document.querySelectorAll(".nav-tabs-icon")).indexOf(x) == 2) {
            document.querySelector(".home-sec").classList.remove("tab-sec-visible");
            document.querySelector(".home-sec").classList.add("tab-section-invisible");
            document.querySelector(".dashboard-sec").classList.remove("tab-sec-visible");
            document.querySelector(".dashboard-sec").classList.add("tab-section-invisible");
            document.querySelector(".todolist-sec").classList.remove("tab-sec-visible");
            document.querySelector(".todolist-sec").classList.add("tab-section-invisible");
            document.querySelector(".calender-sec").classList.add("tab-section-invisible");
            document.querySelector(".calender-sec").classList.remove("tab-sec-visible");
            document.querySelector(".profile-sec").classList.add("tab-sec-visible");
            document.querySelector(".profile-sec").classList.remove("tab-section-invisible");
        }
    }
    )
})

// ------------------------------------------------

Array.from(document.querySelectorAll(".create-tab-option")).forEach(y => {
    y.addEventListener("click", () => {
        document.querySelector(".create-sec").style.display = "inline"
        for (let z = 0; z < Array.from(document.querySelectorAll(".create-tab-option")).length; z++) {
            if (Array.from(document.querySelectorAll(".create-tab-option"))[z].classList.contains("tab-opt-selection")) {
                Array.from(document.querySelectorAll(".create-tab-option"))[z].classList.remove("tab-opt-selection")
            }
        }
        y.classList.add("tab-opt-selection")
        console.log(Array.from(document.querySelectorAll(".create-tab-option")).indexOf(y));

        // if (Array.from(document.querySelectorAll(".create-tab-option")).indexOf(y) == 0) {}
        for (let i = 0; i < Array.from(document.querySelectorAll(".option-page")).length; i++) {
            if (Array.from(document.querySelectorAll(".option-page")).indexOf(Array.from(document.querySelectorAll(".option-page"))[Array.from(document.querySelectorAll(".create-tab-option")).indexOf(y)]) == 0) {
                Array.from(document.querySelectorAll(".option-page.show-option")[0].style.display = ["flex"])
                Array.from(document.querySelectorAll(".option-page.show-option")[1].style.display = ["none"])
                Array.from(document.querySelectorAll(".option-page.show-option")[2].style.display = ["none"])
            }
            else if (Array.from(document.querySelectorAll(".option-page")).indexOf(Array.from(document.querySelectorAll(".option-page"))[Array.from(document.querySelectorAll(".create-tab-option")).indexOf(y)]) == 1) {
                Array.from(document.querySelectorAll(".option-page.show-option")[0].style.display = ["none"])
                Array.from(document.querySelectorAll(".option-page.show-option")[1].style.display = ["flex"])
                Array.from(document.querySelectorAll(".option-page.show-option")[2].style.display = ["none"])
            }
            else if (Array.from(document.querySelectorAll(".option-page")).indexOf(Array.from(document.querySelectorAll(".option-page"))[Array.from(document.querySelectorAll(".create-tab-option")).indexOf(y)]) == 2) {
                Array.from(document.querySelectorAll(".option-page.show-option")[0].style.display = ["none"])
                Array.from(document.querySelectorAll(".option-page.show-option")[1].style.display = ["none"])
                Array.from(document.querySelectorAll(".option-page.show-option")[2].style.display = ["flex"])
            }
        }
    })
});

// -------------------------------------------------
// To-do List Section

const input = document.querySelector("#input-todolist");
const outputList = document.querySelector("#todo-list-cotainer");
if (outputList.innerHTML) {
    showtodoList()
}

function addTask() {
    if (input.value === "") {
        alert("Text input is empty!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        li.classList.add("uncheckedToDo")
        outputList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        let button = document.createElement("button")
        button.innerHTML = "edit"
        button.classList.add("btn-edit-todo")
        li.appendChild(button)
    }
    input.value = "";
    saveDataTodo();
}

outputList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked-todo");
        saveDataTodo();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveDataTodo();
    }
    else if (e.target.tagName === "BUTTON") {
        let Validate = e.target.parentElement.innerHTML;
        let s = Validate.split(/</);
        input.value = s[0];
        e.target.parentElement.remove();
        saveDataTodo();
    }
}, false);


function saveDataTodo() {
    localStorage.setItem("To-do-Data", outputList.innerHTML);
}

function showtodoList() {
    outputList.innerHTML = localStorage.getItem("To-do-Data");
}

// -------------------------------------------------
// Calender Section
const daysContainer = document.querySelector(".cal-days"),
    prevButton = document.querySelector(".cal-btn.prev"),
    nextButton = document.querySelector(".cal-btn.next"),
    month = document.querySelector(".cal-month"),
    todayBtn = document.querySelector(".cal-btn.today");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const date = new Date(); // Get current date:
let currentMonth = date.getMonth(); // Get current month
let currentYear = date.getFullYear(); // Get current Year 

function renderCalender() {
    // Get Previous, Next, and Current Month days
    date.setDate(1);
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 7 - lastDayIndex - 1; // Formula to know how many days left from the next month

    // Headers Month and Year
    month.innerHTML = `${months[currentMonth]} ${currentYear}`

    // Update days in HTML
    let days = "";

    // Prev days in HTML
    for (let x = firstDay.getDay(); x > 0; x--) {
        days += `<div class="cal-day previous">${prevLastDayDate - x + 1}</div>`
    }

    // Current days in HTML
    for (let i = 1; i <= lastDayDate; i++) {
        if (
            i === new Date().getDate() &&
            currentMonth === new Date().getMonth() &&
            currentYear === new Date().getFullYear()
        ) {
            days += `<div class="cal-day today">${i}</div>`
        }
        else {
            days += `<div class="cal-day">${i}</div>`
        }
    }

    // Next month in HTML
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="cal-day next">${j}</div>`
    }

    hideTodayBtn() // To run the hide function every render of the calender
    daysContainer.innerHTML = days;
}
renderCalender();

// Next Button Effect
nextButton.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalender();
})

// Prev Button Effect
prevButton.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalender();
})

// Today Button Effect
todayBtn.addEventListener("click", () => {
    // Setting current moth and year
    currentMonth = date.getMonth();
    currentYear = date.getFullYear();
    renderCalender();
})

// Hiding Today Button if its already the current month
function hideTodayBtn() {
    if (
        currentMonth == new Date().getMonth() &&
        currentYear == new Date().getFullYear()
    ) {
        todayBtn.style.display = "none";
    }
    else {
        todayBtn.style.display = "flex";
    }
}

// -------------------------------------------------
// Create Fx

