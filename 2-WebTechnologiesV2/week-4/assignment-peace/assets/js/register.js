const countries = ["Nigeria", "Kenya", "Ghana", "South Africa", "Zimbabwe"];

// variable holding the country dropdown
let countryDropdown = document.getElementById("country");

countries.forEach(function (item) {
    // create the option element
    const option = document.createElement('option');

    // populate each option with the item (country)
    option.value = item;
    option.text = item;

    // populate the country dropdown
    countryDropdown.appendChild(option);
});

// validate the registration form
document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    // Name validation
    const name = document.getElementById('fullName').value;
    // Regular expression to check if the input is a valid string (only letters)
    const isValidName = /^[a-zA-Z\s]+$/.test(name);
    if (name.trim() === '' || !isValidName) {
        valid = false;
        document.getElementById('nameError').textContent = 'Please enter a valid name using letters only.';
    }

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

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        valid = false;
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
    }

    // Age validation
    const age = document.getElementById('age').value;
    if (isNaN(age) || age < 18 || age > 100) {
        valid = false;
        document.getElementById('ageError').textContent = 'Age must be a valid number between 18 and 100.';
    }

    // Terms validation
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        valid = false;
        document.getElementById('termsError').textContent = 'You must agree to the terms.';
    }

    if (valid) {
        alert('Registration successful!');
        this.onsubmit();
    }
});