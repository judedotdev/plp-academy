// Handle What Happens When Admin Tries to Add a Doctor
document.getElementById('doctorForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const first_name = document.getElementById('first_name').value.trim();
  const last_name = document.getElementById('last_name').value.trim();
  const specialization = document.getElementById('specialization').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const schedule = document.getElementById('schedule').value.trim();

  const confirmMessage = `Are you sure you want to add Dr. ${first_name} ${last_name} with specialization ${specialization} and contact info ${email} ${phone} and schedule ${schedule}?`;
  const confirmation = confirm(confirmMessage);

  if (confirmation) {
    // User clicked "OK", proceed to add doctor
    addDoctor(first_name, last_name, specialization, email, phone, schedule);
  } else {
    // User clicked "Cancel", do nothing
    alert("You have successfully canceled the request to add a doctor!.");
  }

  async function addDoctor(first_name, last_name, specialization, email, phone, schedule) {
    try {
      const response = await fetch('/doctors/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ first_name, last_name, specialization, email, phone, schedule }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("An error occurred while trying to add doctor:", error);
    }
  }
});

// Doctors List
displayDoctors();

async function displayDoctors() {
  const doctors = await getDoctors();

  if (doctors) {
    const doctorsList = document.getElementById('doctorsList');

    doctors.forEach(doctor => {
      // Create a new table row
      const row = document.createElement('tr');

      // Create table data cells for Doctor's Name, Specialization, Schedule, and Email
      row.innerHTML = `
      <td>${`Dr. ${doctor.first_name} ${doctor.last_name}`}</td>
      <td>${doctor.specialization}</td>
      <td>${doctor.schedule}</td>
      <td>${doctor.email}</td>
    `;

      // Append the row to the table body
      doctorsList.appendChild(row);
    });
  }

  async function getDoctors() {
    try {
      const response = await fetch('/doctors', {
        method: 'GET',
      });
      const data = await response.json();
      if (response.ok) return data.doctors;
      return null;
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainElement = document.getElementsByTagName("main")[0];

  // Toggle the sidebar class
  sidebar.classList.toggle("collapsed");

  if (sidebar.classList.contains('collapsed')) {
    mainElement.style.marginLeft = "4.5rem";
  } else {
    mainElement.style.marginLeft = "16rem";
  }
}