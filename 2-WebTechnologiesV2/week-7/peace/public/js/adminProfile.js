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
        const response = await fetch('/admin/delete', {
            method: 'DELETE',
        });
        const data = await response.json();
        alert(data.message);
        if (response.ok) window.location.href = '/auth/register';
    } catch (error) {
        console.error("Error deleting admin account:", error);
    }
}

// validate the update form, then update the admin profile information
document.getElementById("profileForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const role = document.getElementById('role').value.trim().toLowerCase();

    // validate the update form
    const isValidated = validateForm(username, role);
    if (isValidated) {
        const adminData = {
            username,
            role,
        };

        // update the admin profile information
        updateProfile(adminData);
    }
});

function validateForm(username, role) {
    let valid = true;

    // Clear previous error messages
    document.getElementById('usernameError').textContent = '';
    document.getElementById('roleError').textContent = '';

    // username validation
    const isValidUsername = /^[a-zA-Z][a-zA-Z0-9_-]{3,16}$/.test(username); // Regular expression to check if the input is a valid string (only letters)
    if (username === '' || !isValidUsername) {
        valid = false;
        document.getElementById('usernameError').textContent = 'Please enter a valid username using letters only.';
    }

    // role validation
    const isValidRole = /^[a-zA-Z\s]+$/.test(role); // Regular expression to check if the input is a valid string (only letters)
    if (role === '' || !isValidRole) {
        valid = false;
        document.getElementById('roleError').textContent = 'Please enter a valid role using letters only.';
    }

    if (!valid) {
        alert("Please fill out the form correctly.");
        return false;
    } else {
        return true;
    }
}

async function updateProfile(adminData) {
    try {
        const response = await fetch('/admin/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminData)
        });
        const data = await response.json();
        alert(data.message);
    } catch (error) {
        console.error("Error updating admin profile:", error);
    }
}