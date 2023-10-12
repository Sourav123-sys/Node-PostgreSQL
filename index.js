const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const fs = require('fs');

const port = 5000

const { v4: uuidv4 } = require('uuid');

const pool = require('./db.js')

const app = express()

app.use(cors());

app.use(bodyParser.json())


//get book
app.get('/books', async (req, res) => {
    try {
        res.status(200).json({ message: "books are returned " })
    } catch (error) {
        res.json({ error: error.message })
    }
})

//get book by id
app.get('/books/:id', async (req, res) => {
    try {
        const { id } = req.params
        res.status(200).json({ message: `Specefic book is returned with id :${id}` })
    } catch (error) {
        res.json({ error: error.message })
    }
})

//post book
app.post('/books', async (req, res) => {
    try {
        const { name, description } = req.body
        const id = uuidv4()

        //insert data

        const newBook = await pool.query("INSERT INTO book (id,name,description) VALUES ($1,$2,$3) RETURNING * ",
            [id, name, description]
        )

        res.status(201).json({
            message: `${name}  was created.`,
            data: newBook.rows
        })
    } catch (error) {
        res.json({ error: error.message })
    }
})


//delete book 
app.delete('/books/:id', async (req, res) => {
    try {
        const { id } = req.params
        res.status(200).json({ message: `Specefic book is deleted with id :${id}` })
    } catch (error) {
        res.json({ error: error.message })
    }
})

//update book
app.put('/books/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, description } = req.body
        res.status(201).json({ message: `book  was updated.And new name :${name} , description : ${description}` })
    } catch (error) {
        res.json({ error: error.message })
    }
})









app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
})