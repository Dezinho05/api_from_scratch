import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
app.use(express.json()); /*Motivo: por padrão, express não usa json*/

app.post('/users', async (request, response) => {
    await prisma.user.create({
        data: {
            name: request.body.name,
            age: request.body.age,
            course: request.body.course,
            email: request.body.email
        }
    })
    //response.send('POST Users OK'),
    response.status(201).json(request.body);
});

app.get('/users', async (req, res) => {
  const whereClause = {}; // Inicializa um objeto vazio para a cláusula WHERE

  // Verifica se há parâmetros na consulta
  if (req.query) {
    // Adiciona os parâmetros à cláusula WHERE
    if (req.query.name) {
      whereClause.name = {
        contains: req.query.name, // Busca por nomes que contenham o valor da query
      };
    }
    if (req.query.age) {
      whereClause.age = parseInt(req.query.age, 10); // Converte para inteiro
    }
    if (req.query.email) {
      whereClause.email = req.query.email;
    }
  }

  try {
    const users = await prisma.user.findMany({ where: whereClause });
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.put('/users/:id', async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            age: req.body.age,
            course: req.body.course,
            email: req.body.email
        }
    })
    res.status(202).json(req.body);
})


app.delete('/users/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(203).json({message : "Success"})
})

app.listen(3000);

/* Criar API de usuários

    -Criar usuário
    -Listar usuários
    -Editar usuários
    -Deletar usuários
    
    davidhenriq97
    po0gsly0iBHTJWQP
    */