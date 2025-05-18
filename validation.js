document.addEventListener("DOMContentLoaded", function () {
    
    const signupBtn = document.getElementById("submit");
    if (signupBtn) {
        signupBtn.addEventListener("click", function () {
            const name = document.getElementById("name").value.trim();
            const emailOrMobile = document.getElementById("emailormobile").value.trim();
            const password = document.getElementById("password").value;

            if (!name || !emailOrMobile || !password) {
                alert("All fields are required.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                return;
            }

            const userData = {
                name,
                emailOrMobile,
                password
            };

            localStorage.setItem("user", JSON.stringify(userData));
            alert("Signup successful! Please login.");
            window.location.href = "signin.html";
        });
    }

   
    const loginBtn = document.getElementById("login");
    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            const emailOrMobile = document.getElementById("emailormobile").value.trim();
            const password = document.getElementById("password").value;

            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (!storedUser) {
                alert("No user found. Please sign up first.");
                return;
            }

            if (emailOrMobile !== storedUser.emailOrMobile || password !== storedUser.password) {
                alert("Invalid credentials.");
                return;
            }

            alert("Login successful!");
            window.location.href = "index.html";
        });
    }
});
