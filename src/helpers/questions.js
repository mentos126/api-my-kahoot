import shuffle from 'lodash.shuffle'

// const categories = [
//   'Fais pas la moue',
//   'Il était une fois',
//   'Info ou botox',
//   "C'est du propre",
//   'Comment ça marche',
//   'Tomber sur un os'
// ]

const itsCleanQuestions = [
  /**
   * C'est du propre
   */
  // ! TODO
  {
    category: "C'est du propre",
    question: "Quel est le temps de séchage d'un antiseptique alcoolique majeur lors de la préparation cutanée de l'opéré ?",
    image: null,
    response: '1 minute',
    otherResponse: []
  },
  // ! TODO
  {
    category: "C'est du propre",
    question: "Lorsqu'elle est prescrite, la dépilation doit être effectuée par:",
    image: null,
    response: 'Tonte',
    otherResponse: [
      'Rasage',
      'Crème dépilatoire'
    ]
  },
  // ! TODO
  {
    category: "C'est du propre",
    question: "Dans le cadre de la désinfection chirurgicale des mains, après le lavage chirurgical au savon doux, puis-je installer le patient avant l'application de la solution hydro-alcoolique ?",
    image: null,
    response: 'Oui',
    otherResponse: []
  }
]

const howItsWorksQuestions = [
  /**
   * Comment ça marche
   */
  // ! TODO
  {
    category: 'Comment ça marche',
    question: 'Quelle est la durée maximale de gonflage du garrot chirurgical placé sur un membre supérieur ?',
    image: null,
    response: '90 min',
    otherResponse: []
  },
  {
    category: 'Comment ça marche',
    question: "Quel gaz permet de réaliser le pneumopéritoine lors d'une coelioscopie ?",
    image: null,
    response: 'Dioxyde de carbone',
    otherResponse: [
      'Dioxygène',
      'Méthane',
      'Butane',
      "Protoxyde d'azote",
      'Air'
    ]
  },
  {
    category: 'Comment ça marche',
    question: 'Afin de diminuer la dose de rayons reçus, le patient doit être placé :',
    image: '/img/questions/Image1.png',
    response: "Au plus près du détecteur de l'amplificateur de brillance",
    otherResponse: [
      "Au plus près du tube émetteur de l'amplificateur de brillance",
      'Peu importe, la dose est la même quelle que soit sa position'
    ]
  }
]

const onceUponATime = [
  /**
   * Il était une fois
   */
  {
    category: 'Il était une fois',
    question: "L' application du garrot pneumatique a usage chirurgical releve de :",
    image: null,
    response: "sur prescription médicale à condition qu'un médecin puisse intervenir à tout moment",
    otherResponse: [
      'rôle propre',
      'sur prescription médicale',
      'rôle medical'
    ]
  },
  {
    category: 'Il était une fois',
    question: "VRAI ou FAUX Exercer la profession infirmier sans être inscrit au tableau de l'ordre infirmier est un exercice illegal de la profession",
    image: null,
    response: 'VRAI',
    otherResponse: [
      'FAUX'
    ]
  }
]

const dontPoutQuestions = [
  /**
   * Fais pas la moue
   */
  // ! TODO
  {
    category: 'Fais pas la moue',
    question: '(Vrai/Faux) La vésicule',
    image: null,
    response: 'VRAI',
    otherResponse: [
      'FAUX'
    ]
  },
  {
    category: 'Fais pas la moue',
    question: "Qu'est-ce qu'une promontofixation ?",
    image: null,
    response: "La cure d'un prolapsus urogénital",
    otherResponse: [
      "Un appareillage chez l'orthodontiste",
      'Un fixateur externe pour une ostéosynthèse tibia péroné',
      "Pose d'une prothèse hernie de la ligne blanche"
    ]
  },
  // ! TODO
  {
    category: 'Fais pas la moue',
    question: "En cas de sténose de l'urètre on procède en endoscopie à une :",
    image: null,
    response: 'urétrotomie',
    otherResponse: [
      'urétéroscopie',
      'urétérostomie'
    ]
  }
]

const fallOnABoneQuestions = [
  /**
   * Tomber sur un os
   */
  // ! TODO
  {
    category: 'Tomber sur un os',
    question: 'Déterminez le type de fracture dans les cas suivants :',
    image: null,
    response: '',
    otherResponse: [
      'Fracture diaphysaire',
      'Fracture bifocale',
      'Fracture comminutive',
      'Fracture spiroide',
      'Fracture "en bois vert"'
    ]
  },
  // ! TODO
  {
    category: 'Tomber sur un os',
    question: "Comment se nomme l'espace entre la pie mère et l'arachnoïde :",
    image: null,
    response: "L'espace sous arachnoïdien",
    otherResponse: []
  }
]

const infoOrBotox = [
  /**
   * Info ou botox
   */
  {
    category: 'Info ou botox',
    question: "Quelle est la durée de vie d'un implant intraoculaire ?",
    image: null,
    response: 'A vie',
    otherResponse: [
      '10 jours',
      '7 ans',
      '20 ans'
    ]
  },
  // ! TODO
  {
    category: 'Info ou botox',
    question: "Quel est le temps de recoloration normal d'un lambeau ?",
    image: null,
    response: '3 secondes',
    otherResponse: []
  },
  {
    category: 'Info ou botox',
    question: "L'installation chirurgicale du patient fait partie des actes exclusifs de l'IBODE ?",
    image: null,
    response: 'VRAI',
    otherResponse: [
      'FAUX'
    ]
  },
  // ! TODO
  {
    category: 'Info ou botox',
    question: "Lors d'une ablation de la thyroïde, quel est le risque chirurgical majeur ?",
    image: null,
    response: "La paralysie des cordes vocales par section du nerf récurrent. S'il y a paralysie des cordes vocales fermées => trachéotomie en urgence !",
    otherResponse: []
  },
  // ! TODO
  {
    category: 'Info ou botox',
    question: 'Si je suis sténosée, je peux créer un AVC.',
    image: null,
    response: "L'artère carotide interne",
    otherResponse: []
  }
]

const QUESTIONS = [
  ...itsCleanQuestions,
  ...howItsWorksQuestions,
  ...onceUponATime,
  ...dontPoutQuestions,
  ...fallOnABoneQuestions,
  ...infoOrBotox
]

export const questions = QUESTIONS

export const shuffleQuestions = () => {
  const newQuestions = QUESTIONS.map(q => {
    return {
      ...q,
      responses: shuffle([q.response, ...shuffle(q.otherResponse.slice(0, 3))])
    }
  })

  return shuffle(newQuestions)
}
