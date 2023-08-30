const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
} = require('./handler');

const routes = [
    {
        // Menyimpan Catatan
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },
    {
        // Menampilkan Semua Catatan
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },
    {
        // Menampilkan Catatan yang Spesifik
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
    {
        // Mengubah Catatan
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
    {
        // Menghapus Catatan
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
    },
  ];
   
module.exports = routes;