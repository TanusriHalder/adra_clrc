function login(e) {
    e.preventDefault();

    const uid = document.getElementById("uid").value;
    const pwd = document.getElementById("pwd").value;

    // SAMPLE credentials (can be expanded)
    if (uid === "teacher" && pwd === "1234") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "forms.html";
    } else {
        document.getElementById("msg").innerText = "Invalid login";
    }
}
