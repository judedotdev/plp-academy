// Import some dependencies (packages)
const express = require('express'); // HTTP Framework for handling requests
const mysql = require('mysql2'); // DBMS MySQL
const cors = require('cors'); // Cross Origin Resource Sharing
const dotenv = require('dotenv'); // Environmental variable document

// Instance of express framework
const app = express()
app.use(express.json());
app.use(cors());

// configure environment variables
dotenv.config();

// connection to the database
const db = mysql.createConnection({
    host: process.env.DH_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Check if there is a connection
db.connect((err) => {
    // If there is no connection
    if (err) {
        // return console.log('Error connecting to MySQL');
        return console.error('Error connecting to MySQL:', err.stack);
    }

    // If connection works successfully
    console.log("Connected to MySQL as id: ", db.threadId);
});

// YOUR code goes down here

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// `data.ejs` file is in `views` folder
// `data` is a file found in the `views` folder 
app.get('/data', (req, res) => {
    // Retrieve data from database
    db.query('SELECT * FROM patients', (err, results) => {
        if (err) {
            console.error(err);
            // return res.status(500).send('Error Retrieving data');
            return res.status(500).send('Error Retrieving data', err);
        } else {
            // Display the records to the browser
            // res.status(200).send(results);
            return res.render('data', { results: results });
        }
    });
});

// YOUR code goes up here

// 1. Retrieve all patients
app.get('/patients', (req, res) => {
    // Retrieve data from database
    const getPatients = 'SELECT * FROM patients';
    db.query(getPatients, (err, results) => {
        if (err) {
            console.error("Error querying the database:", err);
            return res.status(500).json({ "Database query error": err });
        } else {
            // Display the records to the browser
            res.status(200).render('patients', { results: results });
        }
    });
});

// 2. Retrieve all providers
app.get('/providers', (req, res) => {
    // Retrieve data from database
    const getProviders = 'SELECT * FROM providers';
    db.query(getProviders, (err, results) => {
        if (err) {
            console.error("Error querying the database:", err);
            return res.status(500).json({ "Database query error": err });
        } else {
            // Display the records to the browser
            res.status(200).render('providers', { results: results });
        }
    });
});

// 3. Filter patients by First Name (Create a GET endpoint that retrieves all patients by their first name)
app.get('/patients/:first_name', (req, res) => {
    // Get the first name from query parameters. Example http://localhost:3300/patients/Lanni
    const firstName = req.params.first_name;

    // Check if first name is provided
    if (!firstName) {
        return res.status(400).json({ error: "First name is required" });
    }

    // Query the database to filter patients by first name
    const sqlQuery = "SELECT * FROM patients WHERE first_name = ?";
    db.query(sqlQuery, [firstName], (err, results) => {
        if (err) {
            console.error("Error querying the database:", err);
            return res.status(500).json({ "Database query error": err });
        } else {
            // Display the records to the browser
            return res.status(200).render('patients', { results: results });
        }
    });
});

// 4. Retrieve all providers by their specialty (Create a GET endpoint that retrieves all providers by their specialty)
app.get('/providers/:provider_specialty', (req, res) => {
    // Get the provider specialty from query parameters. Example http://localhost:3300/providers/Pediatrics
    const providerSpecialty = req.params.provider_specialty;

    // Check if provider specialty is provided
    if (!providerSpecialty) {
        return res.status(400).json({ error: "provider specialty is required" });
    }

    // Query the database to filter providers by provider_specialty
    const sqlQuery = "SELECT * FROM providers WHERE provider_specialty = ?";
    db.query(sqlQuery, [providerSpecialty], (err, results) => {
        if (err) {
            console.error("Error querying the database:", err);
            return res.status(500).json({ "Database query error": err });
        } else {
            // Display the records to the browser
            return res.status(200).render('providers', { results: results });
        }
    });
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server Listening on PORT ${process.env.PORT}`);
    console.log(`Server is running on http://localhost:${process.env.PORT}`);

    // Sending a Message to the browser
    console.log('Sending message to browser...');
    app.get('/', (req, res) => {
        res.send('Server Started Successfully!')
    });
});