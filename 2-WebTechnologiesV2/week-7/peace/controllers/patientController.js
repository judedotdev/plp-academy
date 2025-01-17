const bcrypt = require('bcrypt');
const Patient = require('../models/patientModel');

exports.register = async (req, res) => {
  try {
    const { first_name, last_name, email, password, phone, date_of_birth, gender, address } = req.body;
    const [patients] = await Patient.findByEmail(email);
    if (patients.length > 0) return res.status(400).json({ message: "Patient with this email already exists!" });

    const password_hash = await bcrypt.hash(password, 10);
    await Patient.create({ first_name, last_name, email, password_hash, phone, date_of_birth, gender, address });
    res.status(201).json({ message: "Patient registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: 'Error registering patient!', error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [patients] = await Patient.findByEmail(email);
    if (patients.length === 0) return res.status(400).json({ message: 'Patient not found! Please register' });

    const patient = patients[0];
    const isMatch = await bcrypt.compare(password, patient.password_hash);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials!' });

    // Upon successful login, start a session for the patient.
    // Allow logged-in patients to view their profile information
    req.session.patientData = {
      id: patient.id,
      first_name: patient.first_name,
      last_name: patient.last_name,
      email: patient.email,
      phone: patient.phone,
      dob: patient.date_of_birth,
      gender: patient.gender,
      address: patient.address
    };
    res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in!', error });
  }
};

exports.logout = (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to log out!' });
      }
      res.clearCookie('connect.sid'); // Clears the session cookie
      return res.status(301).redirect('/auth/login');
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};

exports.getDoctors = async (req, res) => {
  try {
    const [doctors] = await Patient.findAll();
    res.status(200).json({ doctors });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching doctors', error });
  }
};

// Allow logged-in patients to update their profile information (excluding their email and password).
exports.updateProfile = async (req, res) => {
  try {
    const { first_name, last_name, phone, date_of_birth, gender, address } = req.body;
    const updatedPatient = await Patient.updateProfile(req.session.patientData?.id, { first_name, last_name, phone, date_of_birth, gender, address });
    // Update the session with the new information
    req.session.patientData = {
      first_name: updatedPatient.first_name,
      last_name: updatedPatient.last_name,
      email: updatedPatient.email,
      phone: updatedPatient.phone,
      dob: updatedPatient.date_of_birth,
      gender: updatedPatient.gender,
      address: updatedPatient.address
    };
    res.status(200).json({ message: 'Profile updated successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile!', error });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    // Delete the patient's record from the database
    const [results] = await Patient.deleteById(req.session.patientData?.id);
    if (results.affectedRows > 0) {
      // Destroy the session after deleting the account
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).json({ message: 'Failed to delete account' });
        }
        res.clearCookie('connect.sid'); // Clears the session cookie
        return res.status(200).json({ success: true, message: 'Account successfully deleted.', });
      });
    } else {
      return res.status(404).json({ message: 'Patient not found!' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting account!', error });
  }
};
