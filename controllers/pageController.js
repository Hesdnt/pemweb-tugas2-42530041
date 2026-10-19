const Film = require('../models/filmModel');

// GET /  (mendukung filter ?genre= juga)
exports.home = (req, res) => {
  const { genre } = req.query;
  res.render('home', {
    title: 'Beranda',
    active: 'home',
    hero: Film.byId(8), // film utama di hero (8 = Project Hail Mary), ganti angka ID sesuai selera
    films: genre ? Film.byGenre(genre) : Film.all(),
    genres: Film.genres,
    selected: genre || ''
  });
};

exports.about = (req, res) => {
  res.render('about', { title: 'Tentang Kami', active: 'about' });
};
