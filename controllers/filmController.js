const Film = require('../models/filmModel');

// GET /katalog?genre=action  -> req.query
exports.list = (req, res) => {
  const { genre } = req.query;
  const films = genre ? Film.byGenre(genre) : Film.all();
  res.render('catalog', {
    title: 'Katalog Film',
    active: 'catalog',
    films,
    genres: Film.genres,
    selected: genre || ''
  });
};

// GET /item/:id  -> req.params
exports.detail = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const film = Film.byId(id);
  if (!film) {
    return res.status(404).render('notfound', {
      title: 'Data Tidak Ditemukan',
      active: 'catalog',
      pesan: `Film dengan ID "${req.params.id}" tidak ditemukan.`
    });
  }
  res.render('detail', { title: film.judul, active: 'catalog', film });
};

// GET /tambah
exports.form = (req, res) => {
  res.render('add', { title: 'Tambah Film', active: 'add', genres: Film.genres });
};

// POST /tambah  -> PRG: log, simpan, lalu redirect
exports.store = (req, res) => {
  console.log('Data form diterima:', req.body);
  Film.add(req.body);
  res.redirect('/katalog');
};
