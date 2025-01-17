const express = require('express');
const patientController = require('../controllers/patientController');
const router = express.Router();
const { patientAuth } = require('../middleware/authMiddleware'); // Authentication middleware

router.post('/register', patientController.register);
router.post('/login', patientController.login);
router.get('/logout', patientController.logout);

// Protected routes (only accessible when logged in)
router.get('/doctors', patientAuth, patientController.getDoctors);
router.put('/profile', patientAuth, patientController.updateProfile);
router.delete('/delete', patientAuth, patientController.deleteAccount);

router.get('/dashboard', patientAuth, (req, res) => {
    const patientData = req.session.patientData; // Accessing session data
    res.status(200).render('patientDashboard', { patientData }); // Passing data to the template
});
router.get('/profile', patientAuth, (req, res) => {
    const patientData = req.session.patientData; // Accessing session data
    res.status(200).render('patientProfile', { patientData }); // Passing data to the template
});

module.exports = router;
