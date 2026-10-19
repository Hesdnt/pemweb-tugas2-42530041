const films = [
  {
    id: 1, judul: 'F1', poster: '/images/f1.png', genre: 'action', sutradara: 'Joseph Kosinski', tahun: 2025,
    sinopsis: 'Sonny Hayes, mantan pembalap Formula 1, kembali ke lintasan untuk membantu tim yang terancam bangkrut sekaligus membimbing pembalap muda dalam perjuangan meraih kemenangan.'
  },

  {
    id: 2, judul: 'Fight Club', poster: '/images/fight-club.png', genre: 'action', sutradara: 'David Fincher', tahun: 1999,
    sinopsis: 'Seorang pekerja kantoran yang mengalami insomnia bertemu dengan pria misterius bernama Tyler Durden dan mendirikan klub pertarungan bawah tanah yang perlahan mengubah hidupnya secara drastis.'
  },
  {
    id: 3, judul: 'Where the Wild Things Are', poster: '/images/where-the-wild-things-are.png', genre: 'drama', sutradara: 'Spike Jonze', tahun: 2009,
    sinopsis: 'Seorang anak laki-laki bernama Max melarikan diri ke sebuah pulau ajaib yang dihuni makhluk-makhluk liar dan menjadi raja mereka, sambil belajar memahami emosi serta arti keluarga.'
  },
  {
    id: 4, judul: 'The Batman', poster: '/images/the-batman.png', genre: 'drama', sutradara: 'Matt Reeves', tahun: 2022,
    sinopsis: 'Bruce Wayne, seorang pengusaha kaya, memulai perjalanan untuk membalas dendam atas kematian orang tuanya dan melawan kejahatan di Gotham City.'
  },
  {
    id: 5, judul: 'Interstellar', poster: '/images/interstellar.png', genre: 'scifi', sutradara: 'Christopher Nolan', tahun: 2014,
    sinopsis: 'Sekelompok astronot menembus lubang cacing untuk mencari planet baru bagi umat manusia yang terancam punah.'
  },
  {
    id: 6, judul: 'Dune', poster: '/images/dune.png', genre: 'scifi', sutradara: 'Denis Villeneuve', tahun: 2021,
    sinopsis: 'Di sebuah galaksi jauh, seorang pemuda bertaruh dengan nasibnya untuk menyelamatkan keluarganya dan memperjuangkan kekuasaan di atas planet yang penuh dengan bahaya.'
  },
  {
    id: 7, judul: 'Goat', poster: '/images/goat.png', genre: 'animation', sutradara: 'Tyree Dillihay', tahun: 2026,
    sinopsis: 'Seekor kambing kecil bernama Will mendapat kesempatan bermain roarball secara profesional dan berjuang membuktikan bahwa ukuran tubuh bukan penghalang untuk menjadi atlet hebat.'
  },
  {
    id: 8, judul: 'Project Hail Mary', poster: '/images/project-hail-mary.png', genre: 'scifi', sutradara: 'Phil Lord & Christopher Miller', tahun: 2026,
    sinopsis: 'Seorang guru sains terbangun sendirian di pesawat luar angkasa tanpa ingatan, lalu harus mengingat misinya untuk menyelamatkan Bumi dari ancaman yang memadamkan matahari.'
  }
];

module.exports = {
  all: () => films,
  byGenre: (genre) => films.filter(f => f.genre === genre.toLowerCase()),
  byId: (id) => films.find(f => f.id === id),
  genres: ['action', 'drama', 'scifi', 'animation'],

  // Menambah film baru ke array (tersimpan di memori)
  add: (data) => {
    const id = films.length ? Math.max(...films.map(f => f.id)) + 1 : 1;
    const film = {
      id,
      judul: data.judul.trim(),
      poster: data.poster && data.poster.trim() ? data.poster.trim() : '/images/default.jpg',
      genre: data.genre,
      sutradara: data.sutradara.trim(),
      tahun: parseInt(data.tahun, 10),
      sinopsis: data.sinopsis.trim()
    };
    films.push(film);
    return film;
  }
};
