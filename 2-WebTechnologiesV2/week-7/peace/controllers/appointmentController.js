const Appointment = require('../models/appointmentModel');

exports.bookAppointment = async (req, res) => {
    try {
        const { doctor_id, appointment_date, appointment_time } = req.body;
        await Appointment.create({
            patient_id: req.session.patientData?.id,
            doctor_id,
            appointment_date,
            appointment_time,
            status: 'scheduled'
        });
        res.status(201).json({ message: 'Appointment booked successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error booking appointment' });
    }
};

exports.upcomingAppointments = async (req, res) => {
    try {
        const [appointments] = await Appointment.upcomingAppointments(req.session.patientData?.id);
        res.status(200).json({ appointments });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments' });
    }
};

exports.appointmentHistory = async (req, res) => {
    try {
        const [appointments] = await Appointment.appointmentHistory(req.session.patientData?.id);
        res.status(200).json({ appointments });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments' });
    }
};

exports.rescheduleAppointment = async (req, res) => {
    try {
        const { doctor_id, appointment_date, appointment_time } = req.body;
        await Appointment.reschedule(req.params.id, {
            patient_id: req.session.patientData?.id,
            doctor_id,
            appointment_date,
            appointment_time,
            status: 'scheduled'
        });
        res.status(200).json({ message: 'Appointment rescheduled successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error rescheduling appointment' });
    }
};

exports.updateAppointmentStatus = async (req, res) => {
    try {
        const { status } = req.body;
        await Appointment.updateStatus(req.params.id, status);
        res.status(200).json({ message: 'Appointment status updated' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating appointment status' });
    }
};

exports.cancelAppointment = async (req, res) => {
    try {
        await Appointment.updateStatus(req.params.id, 'canceled');
        res.status(200).json({ message: 'Appointment canceled' });
    } catch (error) {
        res.status(500).json({ message: 'Error canceling appointment' });
    }
};
