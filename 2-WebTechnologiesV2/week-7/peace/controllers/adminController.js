const Admin = require('../models/adminModel');
const bcrypt = require('bcrypt');

// Controller for admin routes
const adminController = {
    // Admin - register
    register: async (req, res) => {
        try {
            const { username, password, role } = req.body;
            const [admins] = await Admin.findByUsername(username);
            if (admins.length > 0) return res.status(400).json({ message: "Admin with this username already exists!" });

            const password_hash = await bcrypt.hash(password, 10);
            await Admin.create({ username, password_hash, role });
            res.status(201).json({ message: "Admin registered successfully!" });
        } catch (error) {
            res.status(500).json({ message: 'Error registering admin!', error });
        }
    },

    // Admin - Login
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            const [admins] = await Admin.findByUsername(username);
            if (admins.length === 0) return res.status(400).json({ message: 'Admin not found! Please register' });

            const admin = admins[0];
            const isMatch = await bcrypt.compare(password, admin.password_hash);
            if (!isMatch) return res.status(401).json({ message: 'Invalid credentials!' });

            // Upon successful login, start a session for the Admin.
            req.session.adminData = {
                id: admin.id,
                username: admin.username,
                role: admin.role
            }
            res.status(200).json({ message: 'Login successful!' });
        } catch (error) {
            res.status(500).json({ message: 'Error logging in!', error });
        }
    },

    logout: (req, res) => {
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
    },

    // Admin - list all patients (with search and filter options)
    getPatients: async (req, res) => {
        try {
            const { search, filterByGender } = req.params;
            const [patients] = await Admin.getAllPatients({ search, filterByGender });
            res.status(200).json({ patients });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching patients', error });
        }
    },

    getAppointments: async (req, res) => {
        try {
            const [appointments] = await Admin.getAllAppointments();
            res.status(200).json({ appointments });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching appointments', error });
        }
    },

    // Allow logged-in admin to update their profile information.
    updateProfile: async (req, res) => {
        try {
            const { username, role } = req.body;
            const updatedAdmin = await Admin.updateProfile(req.session.adminData?.id, { username, role });
            // Update the session with the new information
            req.session.adminData = {
                username: updatedAdmin.username,
                role: updatedAdmin.role
            };
            res.status(200).json({ message: 'Profile updated successfully!' });
        } catch (error) {
            res.status(500).json({ message: 'Error updating profile!', error });
        }
    },

    deleteAccount: async (req, res) => {
        try {
            // Delete the admin's record from the database
            const [results] = await Admin.deleteById(req.session.adminData?.id);
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
    },
};

module.exports = adminController;
