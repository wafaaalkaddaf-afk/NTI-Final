const pages = document.querySelectorAll(".page");

function showPage(pageId) {

    pages.forEach(function(page) {
        page.classList.remove("active-page");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active-page");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.querySelectorAll("[data-page]").forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const pageId =
            this.getAttribute("data-page");

        showPage(pageId);

    });

});

const profileNav =
    document.getElementById("profileNav");

const profileDropdown =
    document.getElementById("profileDropdown");


profileNav.addEventListener("click", function(event) {

    event.stopPropagation();

    profileDropdown.classList.toggle("show");

});

document.addEventListener("click", function(event) {

    if (!event.target.closest(".profile-wrapper")) {

        profileDropdown.classList.remove("show");

    }

});

document
    .querySelectorAll("[data-profile-page]")
    .forEach(function(button) {

        button.addEventListener("click", function() {

            const pageId =
                this.getAttribute("data-profile-page");

            profileDropdown.classList.remove("show");

            showPage(pageId);

        });

    });

const myPlanButton =
    document.getElementById("myPlanButton");

myPlanButton.addEventListener("click", function() {

    profileDropdown.classList.remove("show");

    alert("My Plan page");

});

const logoutDropdown =
    document.getElementById("logoutDropdown");

logoutDropdown.addEventListener("click", function() {

    profileDropdown.classList.remove("show");

    alert("You have been logged out.");

});

const notificationBtn =
    document.getElementById("notificationBtn");

notificationBtn.addEventListener("click", function() {

    alert("You have no new notifications.");

});

const moduleButtons =
    document.querySelectorAll(".module-btn");

moduleButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const course =
            this.closest(".course");

        const title =
            course.querySelector("strong").textContent;

        if (title.includes("Python")) {

            showPage("quizPage");

        } else {

            alert("This module is ready to start.");

        }

    });

});

const backFromQuiz =
    document.getElementById("backFromQuiz");

backFromQuiz.addEventListener("click", function() {

    showPage("coursesPage");

});

const submitQuizBtn =
    document.getElementById("submitQuizBtn");

submitQuizBtn.addEventListener("click", function() {

    let correct = 0;

    for (let i = 1; i <= 5; i++) {

        const selected =
            document.querySelector(
                `input[name="q${i}"]:checked`
            );

        if (
            selected &&
            selected.value === "correct"
        ) {

            correct++;

        }

    }

    document.getElementById("scoreValue").textContent =
        correct + "/5";

    showPage("resultPage");

});

const saveDraftBtn =
    document.getElementById("saveDraftBtn");

saveDraftBtn.addEventListener("click", function() {

    alert("Your quiz has been saved as a draft.");

});

const resultCard =
    document.querySelector(".result-card");

if (resultCard) {

    resultCard.addEventListener("click", function() {

    });

}

const saveProfileBtn =
    document.getElementById("saveProfileBtn");

saveProfileBtn.addEventListener("click", function() {

    alert("Profile changes saved successfully.");

});

const deleteAccountBtn =
    document.getElementById("deleteAccountBtn");

deleteAccountBtn.addEventListener("click", function() {

    const answer =
        confirm(
            "Are you sure you want to delete your account?"
        );

    if (answer) {

        alert("Account deleted.");

    }

});

const sortBtn =
    document.getElementById("sortBtn");

sortBtn.addEventListener("click", function() {

    alert("Sort options opened.");

});

const categoryBtn =
    document.getElementById("categoryBtn");

categoryBtn.addEventListener("click", function() {

    alert("Category options opened.");

});

const searchBtn =
    document.getElementById("searchBtn");

const searchInput =
    document.getElementById("searchInput");

searchBtn.addEventListener("click", function() {

    const value =
        searchInput.value.trim();

    if (value === "") {

        alert("Please enter what you want to learn.");

    } else {

        alert("Searching for: " + value);

    }

});

const statusButtons =
    document.querySelectorAll(".status-btn");

const courses =
    document.querySelectorAll(".course");


statusButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        statusButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        this.classList.add("active");

        const status =
            this.getAttribute("data-status");


        courses.forEach(function(course) {

            const courseStatus =
                course.getAttribute(
                    "data-course-status"
                );


            if (status === "all") {

                course.style.display = "block";

            }

            else if (status === courseStatus) {

                course.style.display = "block";

            }

            else {

                course.style.display = "none";

            }

        });

    });

});

document
    .querySelectorAll(".arrow-btn")
    .forEach(function(button) {

        button.addEventListener("click", function() {

            const modules =
                this
                    .closest(".course")
                    .querySelector(".modules");


            if (modules.style.display === "none") {

                modules.style.display = "flex";

                this.innerHTML =
                    '<i class="fa-solid fa-chevron-down"></i>';

            }

            else {

                modules.style.display = "none";

                this.innerHTML =
                    '<i class="fa-solid fa-chevron-right"></i>';

            }

        });

    });