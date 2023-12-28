const body = document.querySelector("body"), toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
    body.classList.toggle('dark');

});
toggle.addEventListener('click', () => toggle.classList.toggle('active'));

