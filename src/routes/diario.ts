// hago todas las rutas para la API
import express from 'express'
import * as diaryServices from '../services/diarioServices'
import toNewDiaryEntry from '../utils'
const router = express.Router()

router.get('/', (_req, res) => {
  const entries = diaryServices.getEntriesWhithoutSensitiveInfo()
  res.json(entries) // Enviar los datos como respuesta en formato JSON
})

router.get('/:id', (req, res) => {
  // transformo la req q viene siempre como string a un number con el "+"
  const diary = diaryServices.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e) {
    res.status(400).send((e as Error).message)
  }
})

export default router
