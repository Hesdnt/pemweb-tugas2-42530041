# LayarKita (Katalog Film) - Tugas 2 Pemrograman Web

Express + EJS dengan pola MVC. Tema B (Katalog Film).

- Nama / NIM: ISI_DI_SINI
- Video YouTube: ISI_LINK_VIDEO_DI_SINI

## Menjalankan
```
npm install
npm start
```
Buka http://localhost:3000

## Rute
| Method | URL | Fungsi |
|---|---|---|
| GET | / | Beranda (hero + katalog, filter ?genre=) |
| GET | /about | Tentang |
| GET | /katalog?genre=action | Katalog + filter (req.query) |
| GET | /item/:id | Detail (req.params) |
| GET/POST | /tambah | Form tambah, POST lalu redirect (PRG) |

## Mengganti foto
Ganti file di `public/images/` dengan nama yang sama (hero.jpg dan poster tiap film).

## Menambah film
Form `/tambah` menyimpan film ke array di memori (hilang saat server di-restart).
