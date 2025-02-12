import express from 'express';

const app = express();
app.use(express.json()); /*Motivo: por padrão, express não usa json*/

const users = [];

app.post('/users', (request, response) => {
    users.push(request.body),
    console.log(request.body),
    response.send('POST Users OK')
});

app.get('/users', (req, res) => {
    res.json(users)
    //res.send('GET Users OK')
});

app.listen(3000);

/* Criar API de usuários

    -Criar usuário
    -Listar usuários
    -Editar usuários
    -Deletar usuários*/