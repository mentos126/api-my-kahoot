import shuffle from 'lodash.shuffle'

const QUESTIONS = [
  {
    category: "C'est du propre",
    question: 'Qui a gagné l\'euro 2020 ?',
    image: 'https://editorial.uefa.com/resources/0259-0e5e984029ba-92496b8a95c7-1000/2502796.jpg',
    response: 'Italie',
    otherResponse: [
      'Espagne',
      'Angleterre',
      'Portugal'
    ]
  },
  {
    category: 'Comment ça marche',
    question: 'Qui a gagné l\'euro 2020 ?',
    image: 'https://editorial.uefa.com/resources/0259-0e5e984029ba-92496b8a95c7-1000/2502796.jpg',
    response: 'Italie',
    otherResponse: [
      'Espagne',
      'Angleterre',
      'Portugal'
    ]
  },
  {
    category: 'Il était une fois',
    question: 'Qui a gagné l\'euro 2020 ?',
    image: 'https://editorial.uefa.com/resources/0259-0e5e984029ba-92496b8a95c7-1000/2502796.jpg',
    response: 'Italie',
    otherResponse: [
      'Espagne',
      'Angleterre',
      'Portugal'
    ]
  },
  {
    category: 'Fais pas la moue',
    question: 'Qui a gagné l\'euro 2020 ?',
    image: 'https://editorial.uefa.com/resources/0259-0e5e984029ba-92496b8a95c7-1000/2502796.jpg',
    response: 'Italie',
    otherResponse: [
      'Espagne',
      'Angleterre',
      'Portugal'
    ]
  },
  {
    category: 'Tomber sur un os',
    question: 'Qui a gagné l\'euro 2020 ?',
    image: 'https://editorial.uefa.com/resources/0259-0e5e984029ba-92496b8a95c7-1000/2502796.jpg',
    response: 'Italie',
    otherResponse: [
      'Espagne',
      'Angleterre',
      'Portugal'
    ]
  },
  {
    category: 'Info ou botox',
    question: 'Qui a gagné l\'euro 2020 ?',
    image: 'https://editorial.uefa.com/resources/0259-0e5e984029ba-92496b8a95c7-1000/2502796.jpg',
    response: 'Italie',
    otherResponse: [
      'Espagne',
      'Angleterre',
      'Portugal'
    ]
  },
  {
    category: "C'est du propre",
    question: 'Qui est le plus fort ?',
    image: 'https://static.papergeek.fr/2019/10/ronaldo-vs-messi.jpg',
    response: 'C. Ronaldo',
    otherResponse: [
      'Messi'
    ]
  },
  {
    category: "C'est du propre",
    question: 'Dans quelle équipe joue C. Ronaldo ?',
    image: 'https://static.cnews.fr/sites/default/files/styles/image_640_360/public/football_record_cristiano_ronaldo_612ff7e894953_0.jpg?itok=N1IQ2haN',
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
  const newQuestions = QUESTIONS.map(q => {
    return {
      ...q,
      responses: shuffle([q.response, ...q.otherResponse])
    }
  })

  return shuffle(newQuestions)
}
