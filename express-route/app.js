const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('stuff'))

app.get('/ab?cde', (req, res) => {//? makes the one before it optional
    res.send('\ngot you\n')
})

app.get(/i*fly$/, (req, res) => {//? makes the one before it optional
    res.send('\nanother one\n')
})

app.get('/*apple', (req, res) => {
    res.send('\npineapple, apple, greenapple\n')
})

app.route('banana').get((req, res) => {
    res.send('get request\n').put((req, res) => {
        res.send('get put\n').delete((req,res) => {
            res.send('get delete\n')
        })
    })
})

app.listen(port, () => {
    console.log(`on port ${port}`);
});