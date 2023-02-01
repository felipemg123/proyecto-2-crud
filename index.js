
document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("user");

    if (user) {

    } else{
        window.location = "/login.html"
    }
});