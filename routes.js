const express = require('express');
const router = express.Router();


/* Asignación de rutas */
router.get('/', (req, res) => {
    res.render('home.hbs');
});

router.get('/portfolio', (req, res) => {
    res.render('portfolio.hbs');
});

router.get('/blog', (req, res) => {
    res.render('blog.hbs');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/contact', (req, res) => {
    res.render('contact.hbs');
});

module.exports = router;