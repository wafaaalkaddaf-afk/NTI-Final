
let studentBtn = document.getElementById('studentbtn');
let instructorBtn = document.getElementById('instructorbtn');

if (studentBtn && instructorBtn) {

    instructorBtn.addEventListener('click', function () {

        studentBtn.classList.remove('color');
        studentBtn.classList.add('bg-white');

        instructorBtn.classList.remove('bg-white');
        instructorBtn.classList.add('color');

    });

    studentBtn.addEventListener('click', function () {

        instructorBtn.classList.remove('color');
        instructorBtn.classList.add('bg-white');

        studentBtn.classList.remove('bg-white');
        studentBtn.classList.add('color');

    });

}
let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let nextBtn = document.getElementById("nextBtn");
let createBtn = document.getElementById("createBtn");
let rightDiv = document.getElementById("right-div");
let tallform = document.getElementById("tallform");


let email = document.getElementById("email");
let fullName = document.getElementById("fullName");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");
let code = document.getElementById("code");
let loginForm = document.getElementById("loginForm")

let errorhandle = (input, alert = "") => {
    input.closest(".field").querySelector("small").innerText = alert;
}
let emailValiadtion = (element) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let inputvalue = element.value;
    (emailRegex.test(inputvalue)) ? errorhandle(element)
        : errorhandle(element, "please enter a correct email");
}
let fullNameValiadtion = (element) => {
    let inputvalue = element.value.trim();
    if (inputvalue.length < 8) errorhandle(element, "enter at least 8 characters")
    else errorhandle(element)
}
let passwordValiadtion = (element) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;
    let inputvalue = element.value;
    (passwordRegex.test(inputvalue)) ? errorhandle(element)
        : errorhandle(element, "please enter a correct correct password");
}
let codeValiadtion = (element) => {
    let inputvalue = element.value;
    const codeRegex = /^[0-9]{6}$/;
    (codeRegex.test(inputvalue)) ? errorhandle(element)
        : errorhandle(element, "please enter only 6 numbers");

}

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailValiadtion(email);
        passwordValiadtion(password);
    });

}
if (form1) {

    form1.addEventListener("submit", function (e) {

        e.preventDefault();

        fullNameValiadtion(fullName);

        emailValiadtion(email);

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (
            fullName.value.trim().length >= 8 &&
            emailRegex.test(email.value.trim())
        ) {

            form1.classList.add("d-none");

            form2.classList.remove("d-none");

        }

    });

}
if (form2) {

    form2.addEventListener("submit", function (e) {

        e.preventDefault();

        passwordValiadtion(password);

        if (
            confirmpassword.value === "" ||
            confirmpassword.value !== password.value
        ) {

            errorhandle(
                confirmpassword,
                "passwords do not match"
            );

        } else {

            errorhandle(confirmpassword);

        }

        let passwordRegex =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$%^&*-]).{8,}$/;

        if (
            passwordRegex.test(password.value) &&
            confirmpassword.value === password.value &&
            confirmpassword.value !== ""
        ) {

            tallform.classList.add("d-none");

            form3.classList.remove("d-none");

        }

    });

}
if (form3) {

    form3.addEventListener("submit", function (e) {

        e.preventDefault();
        codeValiadtion(code);

    });

}
let footerform = document.getElementById("footerform");
let foooterEmail = document.getElementById("footerEmail");

if (footerform) {

    footerform.addEventListener("submit", function (e) {

        e.preventDefault();

        emailValiadtion(foooterEmail);

    });

}

$(document).ready(function () {
    $(".courses-carousel").owlCarousel({
        items: 4,
        margin: 20,
        nav: true,
        loop: true,
        slideBy: 4,
        navText: ['<span>Next <i class="fa-solid fa-arrow-right text-color"></i></span>']
    });
});
$(document).ready(function () {
    $(".reviews-carousel").owlCarousel({
        items: 3,
        margin: 20,
        nav: true,
        loop: true,
        slideBy: 3,
        navText: ['<span>Next <i class="fa-solid fa-arrow-right text-color"></i></span>']
    });
});


