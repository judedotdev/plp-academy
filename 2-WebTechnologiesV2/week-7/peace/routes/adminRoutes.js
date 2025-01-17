const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();
const { adminAuth } = require('../middleware/authMiddleware'); // Authentication middleware

router.post('/register', adminController.register);
router.post('/login', adminController.login);
router.get('/logout', adminController.logout);

// Protected routes (require authentication)
router.put('/profile', adminAuth, adminController.updateProfile);
router.delete('/delete', adminAuth, adminController.deleteAccount);

// Display a list of patients (admin only), with search and filter options.
router.get('/patients/:search?/:filterByGender?', adminAuth, adminController.getPatients);
// Read: Display a list of upcoming appointments for patients and doctors.
router.get('/appointments', adminAuth, adminController.getAppointments);

router.get('/dashboard', adminAuth, (req, res) => {
    const adminData = req.session.adminData; // Accessing session data
    res.status(200).render('adminDashboard', { adminData }); // Passing data to the template
});
router.get('/profile', adminAuth, (req, res) => {
    const adminData = req.session.adminData; // Accessing session data
    res.status(200).render('adminProfile', { adminData }); // Passing data to the template
});

module.exports = router;
