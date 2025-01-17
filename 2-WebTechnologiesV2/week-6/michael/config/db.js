const mysql = require('mysql2');
// configure environment variables
const dotenv = require('dotenv');
dotenv.config();

// mysql.createPool is suitable for applications that require scalable and efficient handling of multiple database queries.
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Design the database schema using MySQL.
// Function to create all the tables
async function createAllTables() {
    try {
        await pool.promise().execute(`
          CREATE TABLE IF NOT EXISTS Patients (
            id INT AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            phone VARCHAR(20),
            date_of_birth DATE,
            gender ENUM('male', 'female', 'other'),
            address TEXT
          )
        `);

        await pool.promise().execute(`
          CREATE TABLE IF NOT EXISTS Doctors (
            id INT AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            specialization VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            phone VARCHAR(20),
            schedule TEXT
          )
        `);

        await pool.promise().execute(`
          CREATE TABLE IF NOT EXISTS Appointments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            patient_id INT,
            doctor_id INT,
            appointment_date DATE,
            appointment_time TIME,
            status ENUM('scheduled', 'completed', 'canceled'),
            FOREIGN KEY (patient_id) REFERENCES Patients(id) ON DELETE CASCADE,
            FOREIGN KEY (doctor_id) REFERENCES Doctors(id) ON DELETE CASCADE
          )
        `);

        await pool.promise().execute(`
          CREATE TABLE IF NOT EXISTS Admin (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL UNIQUE,
            password_hash VARCHAR(255) NOT NULL,
            role ENUM('admin', 'superadmin')
          )
        `);

        console.log('All tables created successfully.');
    } catch (err) {
        console.error('Error creating tables:', err);
    }
}

// Call the function to create tables
createAllTables();

module.exports = pool.promise();