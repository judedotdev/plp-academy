const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.status(200).render('register');
});
router.get('/login', (req, res) => {
    res.status(200).render('login');
});
router.get('/', (req, res) => {
    res.status(301).redirect('/auth/login');
});

module.exports = router;