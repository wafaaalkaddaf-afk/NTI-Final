let currentStep = 1;
const totalSteps = 4;

const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

//steps 
nextBtn.addEventListener("click", () => {
    if (currentStep < totalSteps) {
        currentStep++;
        updateWizard();
    } 
});

backBtn.addEventListener("click", () => {
    if (currentStep > 1) {
        currentStep--;
        updateWizard();
    }
});

function updateWizard() {
    // Show active step container
    document.querySelectorAll(".step-content").forEach((step, index) => {
        step.classList.toggle("active", index + 1 === currentStep);
    });

    // Update stepper circle styles
    document.querySelectorAll(".step-circle").forEach((circle, index) => {
        circle.classList.toggle("active", index + 1 === currentStep);
    });

    // Control visibility of Back button
    if (currentStep === 1) {
        backBtn.style.visibility = "hidden";
    } else {
        backBtn.style.visibility = "visible";
    }

   if (currentStep === totalSteps) {
    nextBtn.innerHTML = 'Finish <i class="fa-solid fa-check"></i>';

    nextBtn.onclick = function () {
        window.location.href = "home.html";
    };
} else {
    nextBtn.innerHTML = 'Next <i class="fa-solid fa-arrow-right"></i>';
}
}
// Option Card selection (Multi-select with max limit)
document.querySelectorAll(".option-card:not(.single-select)").forEach((card) => {
    card.addEventListener("click", function () {
        const maxLimit = parseInt(this.getAttribute("data-max")) || 99;
        const currentSelected = this.parentElement.querySelectorAll(".option-card.selected").length;

        if (this.classList.contains("selected")) {
            this.classList.remove("selected");
        } else {
            if (currentSelected < maxLimit) {
                this.classList.add("selected");
            } else {
                alert(`You can only select up to ${maxLimit} options.`);
            }
        }
    });
});

// Single-select option cards (Step 3)
document.querySelectorAll(".option-card.single-select").forEach((card) => {
    card.addEventListener("click", function () {
        const parent = this.parentElement;
        parent.querySelectorAll(".option-card").forEach((c) => c.classList.remove("selected"));
        this.classList.add("selected");
    });
});

// Radio cards selection (Step 4)
document.querySelectorAll(".radio-card").forEach((card) => {
    card.addEventListener("click", function () {
        document.querySelectorAll(".radio-card").forEach((c) => c.classList.remove("selected"));
        this.classList.add("selected");
        const radioInput = this.querySelector('input[type="radio"]');
        if (radioInput) radioInput.checked = true;
    });
});
