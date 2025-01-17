// diplay the doctors in appointmentForm
displayDoctors("doctor");

document.getElementById('appointmentForm').addEventListener('submit', (event) => {
  event.preventDefault();

  const doctor_id = document.getElementById('doctor').value.trim();
  const selectedElement = document.getElementById('doctor');
  const doctor_name = selectedElement.options[selectedElement.selectedIndex].textContent.trim();
  const appointment_date = document.getElementById('date').value.trim();
  const appointment_time = document.getElementById('time').value.trim();

  const confirmMessage = `Confirm appointment with ${doctor_name} on ${appointment_date} at ${appointment_time}?`;
  const confirmation = confirm(confirmMessage);

  if (confirmation) {
    // User clicked "OK", proceed to book appointment
    bookAppointment(doctor_id, appointment_date, appointment_time);
  } else {
    // User clicked "Cancel", do nothing
    alert("You have successfully canceled the request to book an appointment with a doctor!.");
  }

  async function bookAppointment(doctor_id, appointment_date, appointment_time) {
    try {
      const response = await fetch('/appointments/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ doctor_id, appointment_date, appointment_time }),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("An error occurred while trying to book appointment:", error);
    }
  }
});

// Upcoming Appointments
displayUpcomingAppointments();

// Appointment History
displayAppointmentHistory()

async function displayAppointmentHistory() {
  const appointments = await getAppointmentHistory();

  if (appointments) {
    const appointmentHistory = document.getElementById('history');

    appointments.forEach(appointment => {
      // Create a new table row
      const row = document.createElement('tr');

      // Create table data cells for doctor name, date, and time
      row.innerHTML = `
      <td>${`Dr. ${appointment.doctor_first_name} ${appointment.doctor_last_name} - ${appointment.specialization}`}</td>
      <td>${new Date(appointment.appointment_date).toISOString().slice(0, 10)}</td>
      <td>${appointment.appointment_time}</td>
      <td>${appointment.status}</td>
    `;

      // Append the row to the table body
      appointmentHistory.appendChild(row);
    });
  }

  async function getAppointmentHistory() {
    try {
      const response = await fetch('/appointments/history', {
        method: 'GET',
      });
      const data = await response.json();
      if (response.ok) return data.appointments;
      return null;
    } catch (error) {
      console.error("Error fetching appointment history:", error);
    }
  }
}

async function displayUpcomingAppointments() {
  const appointments = await getUpcomingAppointments();

  if (appointments) {
    const upcomingAppointments = document.getElementById('upcomingAppointments');

    appointments.forEach(appointment => {
      // Create a new table row
      const row = document.createElement('tr');

      // {/* Button for Reschedule (opens a form to enter a new date and time) */}
      // {/* Cancel (updates the appointment status to "canceled"). */}

      // Create table data cells for doctor name, date, and time
      row.innerHTML = `
      <td>${`Dr. ${appointment.doctor_first_name} ${appointment.doctor_last_name} - ${appointment.specialization}`}</td>
      <td>${new Date(appointment.appointment_date).toISOString().slice(0, 10)}</td>
      <td>${appointment.appointment_time}</td>
      <td>
        <button onclick="showModal(${appointment.appointment_id})">Reschedule</button>
        <button onclick="cancelAppointment(${appointment.appointment_id})">Cancel</button>
      </td>
    `;

      // Append the row to the table body
      upcomingAppointments.appendChild(row);
    });
  }

  async function getUpcomingAppointments() {
    try {
      const response = await fetch('/appointments/upcoming', {
        method: 'GET',
      });
      const data = await response.json();
      if (response.ok) return data.appointments;
      return null;
    } catch (error) {
      console.error("Error fetching upcoming appointments:", error);
    }
  }
}

async function showModal(appointment_id) {
  // Get the modal container and buttons
  const modalContainer = document.getElementById('modalContainer');
  const closeModalBtn = document.getElementById('closeModalBtn');

  // Open modal when "Reschedule Appointment" button is clicked
  modalContainer.style.display = 'flex'; // Show modal

  // diplay the doctors in rescheduleForm
  displayDoctors("rescheduleDoctor");

  // Close modal when "Close" button is clicked
  closeModalBtn.addEventListener('click', function () {
    modalContainer.style.display = 'none'; // Hide modal
  });

  // Close modal if clicked outside the modal content
  window.addEventListener('click', function (event) {
    if (event.target === modalContainer) {
      modalContainer.style.display = 'none';
    }
  });

  document.getElementById('rescheduleForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const doctor_id = document.getElementById('rescheduleDoctor').value.trim();
    const appointment_date = document.getElementById('rescheduleDate').value.trim();
    const appointment_time = document.getElementById('rescheduleTime').value.trim();

    rescheduleAppointment(doctor_id, appointment_date, appointment_time);

    async function rescheduleAppointment(doctor_id, appointment_date, appointment_time) {
      try {
        const response = await fetch(`/appointments/${appointment_id}/reschedule`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ doctor_id, appointment_date, appointment_time }),
        });
        const data = await response.json();
        alert(data.message);
      } catch (error) {
        console.error("An error occurred while trying to reschedule appointment:", error);
      }
    }
  });
}

async function displayDoctors(id) {
  const doctors = await getDoctors();
  if (doctors) {
    // variable holding the doctor dropdown
    let doctorDropdown = document.getElementById(`${id}`);

    // iterate through the doctors array using the forEach() method
    doctors.forEach(function (doctor) {
      // create the option element
      const option = document.createElement('option');

      // populate each option with the doctor
      option.value = doctor.id;
      option.text = `Dr. ${doctor.first_name} ${doctor.last_name} - ${doctor.specialization} (${doctor.schedule})`;

      // populate the doctor dropdown
      doctorDropdown.appendChild(option);
    });
  }

  async function getDoctors() {
    try {
      const response = await fetch('/patients/doctors', {
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

async function cancelAppointment(id) {
  try {
    const response = await fetch(`/appointments/${id}/cancel`, {
      method: 'DELETE',
    });
    const data = await response.json();
    alert(data.message);
  } catch (error) {
    console.error("An error occurred while trying to cancel appointment:", error);
  }
}