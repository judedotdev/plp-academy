const express = require('express');
const appointmentController = require('../controllers/appointmentController');
const router = express.Router();
const { patientAuth } = require('../middleware/authMiddleware'); // Authentication middleware

// Create: Admin can add new doctors, including their schedules.
router.post('/book', patientAuth, appointmentController.bookAppointment);
// Read: Display a list of upcoming appointments for patients by patientId.
router.get('/upcoming', patientAuth, appointmentController.upcomingAppointments);
// Read: Display Appointment History for patients by patientId.
router.get('/history', patientAuth, appointmentController.appointmentHistory);
// Update: Allow patients to reschedule appointments.
router.put('/:id/reschedule', patientAuth, appointmentController.rescheduleAppointment);
// Update: Allow patients to update appointment status.
router.put('/:id/status', patientAuth, appointmentController.updateAppointmentStatus);
// Delete: Allow patients to cancel appointments, updating the status to "canceled."
router.delete('/:id/cancel', patientAuth, appointmentController.cancelAppointment);

module.exports = router;
