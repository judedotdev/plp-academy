// Handle Account Deletion
function confirmDelete() {
    const confirmation = confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (confirmation) {
        // User clicked "OK", proceed with account deletion
        deleteAccount();
    } else {
        // User clicked "Cancel", do nothing
        alert("Account deletion canceled.");
    }
}

async function deleteAccount() {
    try {
        const response = await fetch('/patients/delete', {
            method: 'DELETE',
        });
        const data = await response.json();
        alert(data.message);
        if (response.ok) window.location.href = '/auth/register';
    } catch (error) {
        console.error("Error deleting patient account:", error);
    }
}

// validate the registration form, then resgister the patient
document.getElementById("profileForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const gender = document.getElementById('gender').value.trim().toLowerCase();
    const address = document.getElementById('address').value.trim();

    // validate the registration form
    const isValidated = validateForm(firstName, lastName, phone, dob, gender, address);
    if (isValidated) {
        const patientData = {
            first_name: firstName,
            last_name: lastName,
            phone,
            date_of_birth: dob,
            gender,
            address
        };

        // resgister the patient
        updateProfile(patientData);
    }
});

function validateForm(firstName, lastName, phone, dob, gender, address) {
    let valid = true;

    // Clear previous error messages
    document.getElementById('fNameError').textContent = '';
    document.getElementById('lNameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('dobError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('addressError').textContent = '';

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

    // Validate gender
    if (gender === '') {
        document.getElementById('genderError').textContent = 'Gender is required.';
        valid = false;
    } else if (!/^(male|female|other)$/i.test(gender)) {
        document.getElementById('genderError').textContent = 'Please enter "Male", "Female", or "Other".';
        valid = false;
    }

    // Validate address
    if (address === '') {
        document.getElementById('addressError').textContent = 'Address is required.';
        valid = false;
    } else if (address.length < 5) {
        document.getElementById('addressError').textContent = 'Address must be at least 5 characters long.';
        valid = false;
    }

    if (!valid) {
        alert("Please fill out the form correctly.");
        return false;
    } else {
        return true;
    }
}

async function updateProfile(patientData) {
    try {
        const response = await fetch('/patients/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patientData)
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error("Error updating patient profile:", error);
    }
}