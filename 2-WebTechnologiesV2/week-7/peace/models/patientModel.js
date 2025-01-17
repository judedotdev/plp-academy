const db = require('../config/db');

const Patient = {
    create: async (data) => {
        const { first_name, last_name, email, password_hash, phone, date_of_birth, gender, address } = data;
        return db.query('INSERT INTO Patients (first_name, last_name, email, password_hash, phone, date_of_birth, gender, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [first_name, last_name, email, password_hash, phone, date_of_birth, gender, address]);
    },
    findByEmail: async (email) => {
        return db.query('SELECT * FROM Patients WHERE email = ?', [email]);
    },
    findAll: async () => {
        return db.query('SELECT * FROM Doctors');
    },
    updateProfile: async (id, data) => {
        const { first_name, last_name, phone, date_of_birth, gender, address } = data;
        await db.query('UPDATE Patients SET first_name = ?, last_name = ?, phone = ?, date_of_birth = ?, gender = ?, address = ? WHERE id = ?', [first_name, last_name, phone, date_of_birth, gender, address, id]);

        // Retrieve the updated data
        const [updatedData] = await db.query('SELECT first_name, last_name, email, phone, date_of_birth, gender, address FROM Patients WHERE id = ?', [id]);
        return updatedData; // Return the updated data
    },
    deleteById: async (id) => {
        return db.query('DELETE FROM Patients WHERE id = ?', [id]);
    },
};

module.exports = Patient;
