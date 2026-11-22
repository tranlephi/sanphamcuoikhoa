// Nut Login
// const btnLogin = document.getElementById("btnLogin");

// btnLogin.addEventListener("click", function () {
//     window.location.href = "./login.html";
// });

const btnLogin = document.getElementById("btnLogin");
const btnLogout = document.getElementById("btnLogout");

document.addEventListener("DOMContentLoaded", function () {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (isLoggedIn) {
        btnLogin.style.display = "none";
        btnLogout.style.display = "inline-block";
    } else {
        btnLogin.style.display = "inline-block";
        btnLogout.style.display = "none";
    }
});

btnLogin.addEventListener("click", function () {
    window.location.href = "./login.html";
});

btnLogout.addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    window.location.reload(); // hoặc window.location.href = "./home.html";
});