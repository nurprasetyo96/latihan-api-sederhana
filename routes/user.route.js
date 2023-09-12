// Memanggil module express
const express = require('express');

// Definisi router dengan express
const router = express.Router();

// Definisi array/larik (array index itu dimulai dari 0)
const dataUsers = Array();

// GET list user
router.get('/user', (req, res) => {
    // Mengembalikan data user
    res.status(200).json(dataUsers);
});

// GET untuk detail user
router.get('/user/:index', (req, res) => {
    // Mengambil param index
    const index = req.params.index
    // Mengambil data dari array sesuai dengan index
    const dataDetail = dataUsers[index]

    // Kondisi jika data detail kosong
    if (!dataDetail) {
        res.status(400).send('Data tidak ditemukan')
    }

    // Mengembalikan data detail user
    res.status(200).json(dataDetail)
});

// POST untuk menambahkan data user
router.post('/user', (req, res) => {
    // Mengambil data body yg dikirimkan dari klien (postman)
    const body = req.body
    // Memasukkan data body kedalam array
    dataUsers.push(body) // push adalah fungsi dari array untuk menambahkan record/data
    // Mengembalikan response ke klien
    res.status(201).json(body)
});

// PUT untuk mengubah data user
router.put('/user/:index', (req, res) => {
    // Mengambil param index
    const index = req.params.index
    // Mengambil data body yang dikirimkan
    const body = req.body
    // Cek data di array apakah ada atau tidak
    const checkData = dataUsers[index]

    //Kondisi jika data tidak ditemukan
    if (!checkData) {
        res.status(400).send('Data tidak ditemukan')
    }

    // Update data berdasarkan index
    dataUsers[index] = body
    // Mengembalikan response ke klien
    res.status(201).json(body)
});

// PATCH untuk mengubah data user
// DELETE untuk menghapus data user
router.delete('/user/:index', (req, res) => {
    // Mengambil params index
    const index = req.params.index
    // Cek data di array apakah ada atau tidak
    const checkData = dataUsers[index]

    // Kondisi jika data tidak ditemukan
    if (!checkData) {
        res.status(400).send('Data tidak ditemukan')
    }

    // Hapus data di array berdasarkan index
    // splice fungsi array untuk menghapus data berdasarkan index
    // didalam kurung ada dua parameter, parameter pertama itu diisi `index` dan parameter diisi jumlah data (1)
    dataUsers.splice(index,1)
    // Mengembalikan response ke klien setelah sukses menghapus
    res.status(200).send('Sukses menghapus data indeks ke: ' + index)
});

// Ekspor router agar bisa diakses di file lain (index.js)
module.exports = router