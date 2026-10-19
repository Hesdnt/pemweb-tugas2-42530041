const express = require('express');
const router = express.Router();
const page = require('../controllers/pageController');
const film = require('../controllers/filmController');

router.get('/', page.home);
router.get('/about', page.about);
router.get('/katalog', film.list);
router.get('/tambah', film.form);
router.post('/tambah', film.store);
router.get('/item/:id', film.detail);

module.exports = router;
