const db = require('../config/db');

const Appointment = {
  create: async (data) => {
    const { patient_id, doctor_id, appointment_date, appointment_time, status } = data;
    return db.query('INSERT INTO Appointments (patient_id, doctor_id, appointment_date, appointment_time, status) VALUES (?, ?, ?, ?, ?)',
      [patient_id, doctor_id, appointment_date, appointment_time, status]);
  },
  upcomingAppointments: async (patient_id) => {
    const slqQuery = `
                      SELECT 
                        Appointments.id AS appointment_id,
                        Appointments.appointment_date,
                        Appointments.appointment_time,
                        Appointments.status,
                        Doctors.first_name AS doctor_first_name,
                        Doctors.last_name AS doctor_last_name,
                        Doctors.specialization,
                        Doctors.email AS doctor_email,
                        Doctors.phone AS doctor_phone,
                        Doctors.schedule AS doctor_schedule
                      FROM 
                        Appointments
                      JOIN 
                        Doctors ON Appointments.doctor_id = Doctors.id
                      WHERE 
                        Appointments.patient_id = ?
                        AND Appointments.status = 'scheduled'
                      ORDER BY appointment_id;
                      `;
    return db.query(slqQuery, [patient_id]);
  },
  appointmentHistory: async (patient_id) => {
    const slqQuery = `
                      SELECT 
                        Appointments.id AS appointment_id,
                        Appointments.appointment_date,
                        Appointments.appointment_time,
                        Appointments.status,
                        Doctors.first_name AS doctor_first_name,
                        Doctors.last_name AS doctor_last_name,
                        Doctors.specialization,
                        Doctors.email AS doctor_email,
                        Doctors.phone AS doctor_phone,
                        Doctors.schedule AS doctor_schedule
                      FROM 
                        Appointments
                      JOIN 
                        Doctors ON Appointments.doctor_id = Doctors.id
                      WHERE 
                        Appointments.patient_id = ?
                        AND (Appointments.status = 'completed' OR Appointments.status = 'canceled')
                      ORDER BY appointment_id;
                      `;
    return db.query(slqQuery, [patient_id]);
  },
  reschedule: async (id, data) => {
    const { patient_id, doctor_id, appointment_date, appointment_time, status } = data;
    return db.query('UPDATE Appointments SET patient_id = ?, doctor_id = ?, appointment_date = ?, appointment_time = ?, status = ? WHERE id = ?',
      [patient_id, doctor_id, appointment_date, appointment_time, status, id]);
  },
  updateStatus: async (id, status) => {
    return db.query('UPDATE Appointments SET status = ? WHERE id = ?', [status, id]);
  },
  deleteById: async (id) => {
    return db.query('DELETE FROM Appointments WHERE id = ?', [id]);
  },
};

module.exports = Appointment;
