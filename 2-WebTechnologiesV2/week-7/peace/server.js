const express = require('express');
const path = require('path');
const cors = require('cors'); // Cross Origin Resource Sharing
const dotenv = require('dotenv'); // Environmental variable document
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const patientRoutes = require('./routes/patientRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db');

// configure environment variables
dotenv.config();

// Instance of express framework
const app = express();
// Middlewares
app.use(express.json()); // To parse JSON requests
app.use(express.urlencoded({ extended: true })); // capture form data
app.use(cors());

// Initialize session store with MySQL
const sessionStore = new MySQLStore({}, db); // Pass an empty options object {} for the first argument
app.use(session({
  secret: process.env.SESSION_SECRET,
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  // Use session cookies to manage patient sessions.
  cookie: {
    secure: false, // Set to true if using HTTPS
    maxAge: 1000 * 60 * 60 // Session expires after 1 hour (in milliseconds)
  },
}));

// EJS Settings
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// API routes
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

// Web Pages
app.get('/', (req, res) => {
  res.status(200).render('index');
});

const PORT = process.env.PORT || 2300;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Server is running on http://localhost:${PORT}`);
});
