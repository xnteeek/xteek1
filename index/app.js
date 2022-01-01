const switchButton = document.querySelector("main input");

switchButton.addEventListener("click", () => {
    document.querySelector("body").classList.toggle("dark");
    localStorage.setItem("theme", "dark");
});