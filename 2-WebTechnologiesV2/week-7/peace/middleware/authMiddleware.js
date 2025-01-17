// Middleware for admin routes
const adminAuth = (req, res, next) => {
    if (req.session && req.session.adminData?.id) {
        return next(); // User is authenticated, Proceed to the requested route
    }
    // If not authenticated
    res.status(401).redirect('/auth/login');
};

// Middleware for patient routes
const patientAuth = (req, res, next) => {
    if (req.session && req.session.patientData?.id) {
        return next(); // User is authenticated, Proceed to the requested route
    }
    // If not authenticated, redirect to the login page
    res.status(401).redirect('/auth/login');
};

module.exports = { adminAuth, patientAuth };