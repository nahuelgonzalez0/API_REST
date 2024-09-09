import express from 'express' // ESmodules

// forma antigua
// const express = require('express') -> commnjs

import diaryRouter from './routes/diario'
const app = express()// creo la app
app.use(express.json()) // transforma la request.body a un json

const PORT: number = 3000 // lugar donde el servbidor estara alojado

/*
cuando hacen una solicitud HTTP get (refrescar la pagina por ej) se registra un msj en la consola y se le responde al cliente con la palabra "pong"
*/
app.get('/ping', (_req, res) => {
  console.log('alguien ha echo un ping ' + new Date().toLocaleDateString()) // mensaje que va a la consola del servidor
  res.send('pong')// mensaje q ve el cliente
})

app.use('/api/diario', diaryRouter)

// le entran 2 parametros a listen, uno q seria el puerto donde se anoja la API y el 2do parametro seria el callback para que me avise por consola que se abrio el servidor
app.listen(PORT, () => {
  console.log('Server corriendo en el puerto', PORT)
})
