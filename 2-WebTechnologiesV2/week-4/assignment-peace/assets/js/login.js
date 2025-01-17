// validate the login form
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = 'Invalid email format.';
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        valid = false;
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
    }

    if (valid) {
        alert('LogIn successful!');
    }
});