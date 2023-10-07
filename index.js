const express = require('express');

const port = 5000
const app = express()

const fortunes = require ("./data/fortunes.json")


app.get('/fortunes', (req, res) => {

    res.json(fortunes);
})
 
app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
})