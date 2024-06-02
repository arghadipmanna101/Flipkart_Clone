// dark mode js
const body = document.querySelector("body");
const toggledm = document.querySelector("#toggledm");
const sunIcon = document.querySelector(".toggledm .bxs-sun");
const moonIcon = document.querySelector(".toggledm .bx-moon");

toggledm.addEventListener("change", () => {

    body.classList.toggle("dark");
    sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className = moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
});