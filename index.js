const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const fs = require('fs');

const port = 5000
const app = express()

const fortunes = require("./data/fortunes.json")



app.use(cors());


app.use(bodyParser.json())


const writeFortunes = json => {
    fs.writeFile('./data/fortunes.json', JSON.stringify(json), err => console.log(err))
}


app.get('/fortunes', (req, res) => {
    res.json(fortunes);
})

app.get('/fortunes/random', (req, res) => {

    const randomFortunes = Math.floor(Math.random() * fortunes.length)
    const randomFortune = fortunes[randomFortunes]
    res.json(randomFortune)
})
app.get('/fortunes/:id', (req, res) => {

    res.json(fortunes.find(f => f.id == req.params.id))
})
app.post('/fortunes', (req, res) => {

    const { message, spiritAnimal, luckyNumber } = req.body
    const fortuneId = fortunes.map(f => f.id)
    const newFortune = {
        id: (fortuneId.length > 0 ? Math.max(...fortuneId) : 0) + 1
        , message,
        spiritAnimal,
        luckyNumber
    }
    const newFortuneData = fortunes.concat(newFortune)
    writeFortunes(newFortuneData)



    res.json(newFortuneData)
})
app.put('/fortunes/:id', (req, res) => {
    const { id } = req.params
    const { message, spiritAnimal, luckyNumber } = req.body
    const oldFortune = fortunes.find(f => f.id == id)
    if (message) oldFortune.message = message;
    if (luckyNumber) oldFortune.spiritAnimal = spiritAnimal;
    if (spiritAnimal) oldFortune.luckyNumber = luckyNumber;


   
    writeFortunes(fortunes)
    res.json(fortunes)
})
app.delete('/fortunes/:id', (req, res) => {
    const { id } = req.params
    const newFortunes = fortunes.filter(f => f.id != id)
    writeFortunes(newFortunes)
    res.json(newFortunes)
})




app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
})