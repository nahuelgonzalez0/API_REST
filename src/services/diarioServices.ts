import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diario.json'

// obligo al programa a tratar un valor como si fuera de un tipo en especifico
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

// recuperar las entradas del diario
export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)
  if (entry != null) {
    // en caso de q exista quitamos el comment
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWhithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  // hacemos un map para que no se imprima el comment
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

// agregard
export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
