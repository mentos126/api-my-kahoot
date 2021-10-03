import shuffle from 'lodash.shuffle'

const QUESTIONS = [
  {
    category: 'Foot',
    question: 'Qui a gagné l\'euro 2020 ?',
    response: 'Italie',
    otherResponse: [
      'Espagne',
      'Angleterre',
      'Portugal'
    ]
  },
  {
    category: 'Foot',
    question: 'Qui est le plus for ?',
    response: 'C. Ronaldo',
    otherResponse: [
      'Messi'
    ]
  },
  {
    category: 'Foot',
    question: 'Dans quelle équipe joue C. Ronaldo ?',
    response: 'Manchester United',
    otherResponse: [
      'Juventus',
      'Real de Madrid',
      'Manchester City'
    ]
  }
]

export const questions = QUESTIONS

export const shuffleQuestions = () => {
  return shuffle(QUESTIONS)
}
