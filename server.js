import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    res.send('Return Users OK')
})

app.listen(3000)