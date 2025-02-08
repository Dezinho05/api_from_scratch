import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    res.send('Return Users OK')
})

app.listen(2525)