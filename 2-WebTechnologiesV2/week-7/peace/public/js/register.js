var formBox = document.getElementsByClassName('form-box')[0];
var x = document.getElementById('patient');
var y = document.getElementById('admin');
var z = document.getElementById('btn');

function showAdminForm() {
    formBox.style.height = "480px";
    if (formBox.clientWidth === 384) {
        x.style.left = "-450px";
        y.style.left = "-320px";
        z.style.left = "110px";
    } else if (formBox.clientWidth === 424) {
        x.style.left = "-450px";
        y.style.left = "-360px";
        z.style.left = "110px";
    }
}

function showPatientForm() {
    formBox.style.height = "1172px";
    x.style.left = "0px";
    y.style.left = "150px";
    z.style.left = "0px";
}

// validate the patient registration form, then resgister the patient
document.getElementById("patient").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value.trim();
    // const terms = document.getElementById('terms').checked;

    // validate the registration form
    const isValidated = validatePatient(firstName, lastName, email, password, confirmPassword, phone, dob);
    if (isValidated) {
        const patientData = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            phone,
            date_of_birth: dob,
            gender,
            address
        };

        // resgister the patient
        patientRegister(patientData);
    }
});

function validatePatient(firstName, lastName, email, password, confirmPassword, phone, dob) {
    let valid = true;

    // Clear previous error messages
    document.getElementById('fNameError').textContent = '';
    document.getElementById('lNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('dobError').textContent = '';
    // document.getElementById('genderError').textContent = '';
    // document.getElementById('addressError').textContent = '';
    // document.getElementById('termsError').textContent = '';

    // firstName validation
    const isValidFirstName = /^[a-zA-Z\s]+$/.test(firstName); // Regular expression to check if the input is a valid string (only letters)
    if (firstName === '' || !isValidFirstName) {
        valid = false;
        document.getElementById('fNameError').textContent = 'Please enter a valid firstName using letters only.';
    }

    // lastName validation
    const isValidLastName = /^[a-zA-Z\s]+$/.test(lastName); // Regular expression to check if the input is a valid string (only letters)
    if (lastName === '' || !isValidLastName) {
        valid = false;
        document.getElementById('lNameError').textContent = 'Please enter a valid lastName using letters only.';
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = 'Invalid email format.';
    }

    // Password validation
    if (password.length < 8 || confirmPassword.length < 8 || password !== confirmPassword) {
        valid = false;
        if (password.length < 8) {
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        } else if (confirmPassword.length < 8) {
            document.getElementById('confirmPasswordError').textContent = 'Password must be at least 8 characters long.';
        } else if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        }
    }

    // Phone Number Validation
    const phonePattern = /^\+[1-9]\d{1,14}$/; // Generic regex for international phone numbers (E.164 format)
    if (!phonePattern.test(phone)) {
        valid = false;
        document.getElementById('phoneError').textContent = "Please enter a valid international phone number in the format +[CountryCode][Number].";
    }

    // Date of Birth (DOB) validation
    const today = new Date();
    const dobDate = new Date(dob);
    const dobPattern = /^\d{4}-\d{2}-\d{2}$/; // Pattern for YYYY-MM-DD
    if (!dob || !dobPattern.test(dob)) {
        valid = false;
        document.getElementById('dobError').textContent = 'Please enter a valid date of birth in mm/dd/yy format.';
    } else if (dobDate > today) { // Check that DOB is not in the future
        valid = false;
        document.getElementById('dobError').textContent = 'Date of birth cannot be in the future.';
    }

    // Terms validation
    // if (!terms) {
    //     valid = false;
    //     document.getElementById('termsError').textContent = 'You must agree to the Terms and Conditions.';
    // }

    if (!valid) {
        alert("Please fill out the form correctly.");
        return false;
    } else {
        return true;
    }
}

async function patientRegister(patientData) {
    try {
        const response = await fetch('/patients/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientData)
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error("Error registering patient:", error);
    }
}

// validate the admin registration form, then resgister the admin
document.getElementById("admin").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const role = document.getElementById('role').value.trim();
    const password = document.getElementById('adminPwd').value.trim();

    // validate the registration form
    const isValidated = validateAdmin(username, password);
    if (isValidated) {
        const adminData = {
            username,
            password,
            role
        };

        // resgister the admin
        adminRegister(adminData);
    }
});

function validateAdmin(username, password) {
    let valid = true;

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('adminPwdError').textContent = '';

    // Username validation
    const isValidUsername = /^[a-zA-Z][a-zA-Z0-9_-]{3,16}$/.test(username);
    if (username === '' || !isValidUsername) {
        valid = false;
        document.getElementById('usernameError').textContent = 'Please enter a valid username.';
    }

    // Password validation
    if (password.length < 8) {
        valid = false;
        document.getElementById('adminPwdError').textContent = 'Password must be at least 8 characters long.';
    }

    if (!valid) {
        alert("Please fill out the form correctly.");
        return false;
    } else {
        return true;
    }
}

async function adminRegister(adminData) {
    try {
        const response = await fetch('/admin/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error("An error occurred while trying to register admin:", error);
    }
}