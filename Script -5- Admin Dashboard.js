document.querySelector(".sidenav-create").addEventListener("click", function () {
    document.querySelector(".create-options").classList.toggle("show-create-option");
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
        x.children[0].children[0].classList.add("icon-bg")
    }
    )
})



document.querySelector(".nav-tabs-icon-create").addEventListener("click", function () {
    for (let i = 0; i < Array.from(document.querySelectorAll(".nav-tabs-icon")).length; i++) {
        document.querySelectorAll(".nav-tabs-icon")[i].children[0].children[0].classList.remove("icon-bg")
    }
    if (document.querySelector(".nav-tabs-icon-create").children[0].children[0].children[0].classList.contains("icon-bg")) {
        document.querySelector(".nav-tabs-icon-create").children[0].children[0].children[0].classList.remove("icon-bg")
    }
    else {
        document.querySelector(".nav-tabs-icon-create").children[0].children[0].children[0].classList.add("icon-bg")
    }
})