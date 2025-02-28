--First--
Execute this command line in your console: `npm i express`
Instalar o Prisma: `npm install prisma --save-dev`

--How to run--
Execute this command line in your console: `node server.js`
To run after every change: `node --watch server.js`
Initialize Prisma: `npm prisma init`
Instale o Prisma Client: `npm install @prisma/client`
Suba para o Prisma Client: `npx prisma db push`
Importe para o arquivo server.js:
``` js
import { PrismaClient } from '@prisma/client'  
  
const prisma = new PrismaClient()
```
Executar o Prisma Client: `npx prisma studio`