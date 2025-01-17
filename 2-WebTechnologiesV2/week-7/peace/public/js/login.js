var formBox = document.getElementsByClassName('form-box')[0];
var x = document.getElementById('patient');
var y = document.getElementById('admin');
var z = document.getElementById('btn');

function showAdminForm() {
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
    x.style.left = "0px";
    y.style.left = "150px";
    z.style.left = "0px";
}

// validate the patient login form
document.getElementById("patient").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('patientPwd').value;

    // validate the login form
    const isValidated = validatePatient(email, password);

    if (isValidated) {
        const credentials = { email, password };

        // login the patient
        patientLogin(credentials)
    }
});

function validatePatient(email, password) {
    let valid = true;

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = 'Invalid email format.';
        alert('Invalid email format.');
    }

    // Password validation
    if (password.length < 8) {
        valid = false;
        document.getElementById('patientPwdError').textContent = 'Password must be at least 8 characters long.';
        alert('Password must be at least 8 characters long.');
    }

    if (!valid) {
        alert("Please fill out the form correctly.");
        return false;
    } else {
        return true;
    }
}

async function patientLogin(credentials) {
    try {
        const response = await fetch('/patients/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const data = await response.json();
        if (!response.ok) alert(data.message);
        if (response.ok) {
            document.getElementById('patientLoginMsg').textContent = `${data.message}`;
            window.location.href = '/patients/dashboard'; // Redirect to the dashboard
        }
    } catch (error) {
        console.error("Error registering patient:", error);
    }
}

// validate the admin login form
document.getElementById("admin").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('adminPwd').value.trim();

    // validate the login form
    const isValidated = validateAdmin(username, password);

    if (isValidated) {
        const credentials = { username, password };

        // login the admin
        adminLogin(credentials)
    }
});

function validateAdmin(username, password) {
    let valid = true;

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('adminPwdError').textContent = '';
    document.getElementById('adminLoginMsg').textContent = '';

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

async function adminLogin(credentials) {
    try {
        const response = await fetch('/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
        const data = await response.json();
        if (!response.ok) alert(data.message);
        if (response.ok) {
            document.getElementById('adminLoginMsg').textContent = `${data.message}`;
            window.location.href = '/admin/dashboard'; // Redirect to the dashboard
        }
    } catch (error) {
        console.error("Error registering patient:", error);
    }
}