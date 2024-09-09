import { NewDiaryEntry } from './types'
import { Visibility, Weather } from './enums'

const parseComment = (comment: any): string => {
  if (!isString(comment)) {
    throw new Error('comentario incorrecto o faltante')
  }
  return comment
}

const parseDate = (date: any): string => {
  if (!isDate(date) || !isString(date)) {
    throw new Error('fecha incorrecta o faltante')
  }
  return date
}

const parseWeather = (weather: any): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error('información meteorológica incorrecta o faltante')
  }

  return weather
}

const parseVisibility = (visibility: any): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error('visibilidad incorrecta o faltante')
  }

  return visibility
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

// verifica si la cadenad e texto puede ser interpretada como una fecha valida
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (string: any): boolean => {
  // accedo a los valores del obj Weather
  return Object.values(Weather).includes(string)
}

const isVisibility = (string: any): boolean => {
  return Object.values(Visibility).includes(string)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
