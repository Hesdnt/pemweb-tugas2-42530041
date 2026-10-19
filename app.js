const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = 3000;

// View engine & path absolut
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // membaca body form

// Routes
app.use('/', routes);

// 404 handler (URL tidak dikenal)
app.use((req, res) => {
  res.status(404).render('notfound', {
    title: 'Tidak Ditemukan',
    active: '',
    pesan: 'Halaman yang kamu cari tidak ada.'
  });
});

app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
