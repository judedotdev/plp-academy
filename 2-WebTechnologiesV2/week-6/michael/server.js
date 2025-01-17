const express = require('express');
const cors = require('cors'); // Cross Origin Resource Sharing
const dotenv = require('dotenv'); // Environmental variable document
const session = require('express-session');
const patientRoutes = require('./routes/patientRoutes.js');
const doctorRoutes = require('./routes/doctorRoutes.js');
const appointmentRoutes = require('./routes/appointmentRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');

// configure environment variables
dotenv.config();

// Instance of express framework
const app = express();
// Middlewares
app.use(express.json()); // To parse JSON requests
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // Use session cookies to manage patient sessions.
    cookie: {
        secure: false, // Set to true if using HTTPS
        maxAge: 60 * 60 * 1000 // Session expires after 60 minutes (in milliseconds)
    },
}));

// API routes
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 2300;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    app.get('/', (req, res) => {
        res.status(200).send('Welcome to the Telemedicine API!');
    });
});