const express = require('express')
const app = express()

app.get('/users/:userId/books/:bookId', (req, res) => {
    let user = req.params.userId;
    let book = req.params.bookId;
    let msg = `user = ${user} and book = ${book}`;
    console.log(req.params)
    res.send(`${msg}`);
})//note: the name of route paramseters must be made up of "word characters" ({A-Za-z0-9})

