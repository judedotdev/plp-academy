const express = require('express');
const patientController = require('../controllers/patientController');
const router = express.Router();
const { patientAuth } = require('../middleware/authMiddleware'); // Authentication middleware

// CRUD - create, read, update, delete
// create - post request
"/patients/register"
router.post('/register', patientController.register);
"/patients/login"
router.post('/login', patientController.login);
// read - get request
"/patients/logout"
router.get('/logout', patientController.logout);

// Protected routes (only accessible when logged in)
// update - put
router.put('/profile', patientAuth, patientController.updateProfile);
// delete - delete request
router.delete('/delete', patientAuth, patientController.deleteAccount);

// read - get request 
router.get('/dashboard', patientAuth, (req, res) => {
    const patientData = req.session.patientData; // Accessing session data
    res.status(200).json({ patientData }); // Passing data to the template
});

module.exports = router;