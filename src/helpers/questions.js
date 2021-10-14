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
  {
    category: "C'est du propre",
    question: "Le temps de séchage d'un antiseptique alcoolique majeur lors de la préparation cutanée de l'opéré est de :",
    image: null,
    response: '1 minute',
    otherResponse: [
      '30 secondes',
      '1 minute 30',
      '2 minutes'
    ]
  },
  {
    category: "C'est du propre",
    question: "Lorsqu'elle est prescrite, la dépilation doit être effectuée par :",
    image: null,
    response: 'Tonte',
    otherResponse: [
      'Rasage',
      'Crème dépilatoire',
      'Épilation'
    ]
  },
  {
    category: "C'est du propre",
    question: "Lors de la désinfection chirurgicale des mains : je peux installer le patient, après le lavage chirurgical au savon doux et avant l'application de la solution hydro-alcoolique ?",
    image: null,
    response: 'Vrai',
    otherResponse: [
      'Faux'
    ]
  }
]

const howItsWorksQuestions = [
  /**
   * Comment ça marche
   */
  {
    category: 'Comment ça marche',
    question: 'Quelle est la durée maximale de gonflage du garrot chirurgical placé sur un membre supérieur ?',
    image: null,
    response: '90 min',
    otherResponse: [
      '60 min',
      '100 min',
      '120 min'
    ]
  },
  {
    category: 'Comment ça marche',
    question: "Quel gaz permet de réaliser le pneumopéritoine lors d'une coelioscopie ?",
    image: null,
    response: 'Dioxyde de carbone',
    otherResponse: [
      'Dioxygène',
      "Protoxyde d'azote",
      'Air'
    ]
  },
  {
    category: 'Comment ça marche',
    question: 'Afin de diminuer la dose de rayons reçus, le patient doit être placé :',
    image: 'https://docteur-bron-urologue.fr/wp-content/uploads/2016/03/Lithotritie-extra-corporelle.jpg',
    response: "Au plus près du détecteur de l'amplificateur de brillance",
    otherResponse: [
      "Au plus près du tube émetteur de l'amplificateur de brillance",
      'Peu importe, la dose est la même quelle que soit sa position'
    ]
  },
  {
    category: 'Comment ça marche',
    question: 'Que puis-je bien être ?',
    image: '/img/questions/Image1.png',
    response: 'Un ostéotome',
    otherResponse: [
      'Une rugine',
      'Un chausse pied',
      'Un ciseau Gouge'
    ]
  }
]

const onceUponATime = [
  /**
   * Il était une fois
   */
  {
    category: 'Il était une fois',
    question: "L'application du garrot pneumatique à usage chirurgical est réalisée :",
    image: null,
    response: "sur prescription médicale à condition qu'un médecin puisse intervenir à tout moment",
    otherResponse: [
      'sur rôle propre',
      'sur prescription médicale',
      'sur rôle médical'
    ]
  },
  {
    category: 'Il était une fois',
    question: "Exercer la profession infirmier sans être inscrit au tableau de l'ordre infirmier est un exercice illégal de la profession",
    image: null,
    response: 'Vrai',
    otherResponse: [
      'Faux'
    ]
  }
]

const dontPoutQuestions = [
  /**
   * Fais pas la moue
   */
  {
    category: 'Fais pas la moue',
    question: 'La vésicule biliaire :',
    image: null,
    response: 'est vascularisée par l’artère cystique',
    otherResponse: [
      'est située dans l’épigastre',
      'produit la bile'
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
  {
    category: 'Tomber sur un os',
    question: "L'abduction est :",
    image: null,
    response: 'L’éloignement d’un segment du membre de l’axe du corps',
    otherResponse: [
      'Le rapprochement de 2 segments de membres',
      'Le rapprochement d’un segment de membres de l’axe du corps',
      'La déformation d’un membre'
    ]
  },
  {
    category: 'Tomber sur un os',
    question: 'Déterminez le type de fracture dans le cas suivant :',
    image: 'https://medicalforum.ch/fr/?tx_swajournal_file%5Baction%5D=index&tx_swajournal_file%5Bcontroller%5D=File&tx_swajournal_file%5Bidentifier%5D=fms.2020.08333&tx_swajournal_file%5Bjournal%5D=ezm_smf&tx_swajournal_file%5Blanguage%5D=fr&tx_swajournal_file%5Bmode%5D=view&tx_swajournal_file%5Bresource%5D=http%3A%2F%2Fprodclient.emh02.snowflakehosting.ch%2Fapi%2Ffile%2Fproduction%2F30%2F30f9182fd6f9c96b4df0a313ee6429374bfc880d%2F08333_de_fr_f1a_1170x450.jpg&tx_swajournal_file%5Btype%5D=article&type=7479858270737669&cHash=9097a0ec2b6b2d9b82ec100b17dd1e3a',
    response: 'Fracture diaphysaire',
    otherResponse: [
      'Fracture bifocale',
      'Fracture comminutive',
      'Fracture spiroide'
    ]
  },
  {
    category: 'Tomber sur un os',
    question: "L'odre des méninges de la plus externe à la plus interne est :",
    image: null,
    response: 'Duremère, Arachnoïde, Pie mère',
    otherResponse: [
      'Pie mère, Duremère, Arachnoïde',
      'Arachnoïde, Duremère, Pie mère',
      'Duremère, Pie mère, Arachnoïde'
    ]
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
  {
    category: 'Info ou botox',
    question: "Quel est le temps de recoloration normal d'un lambeau ?",
    image: null,
    response: '3 secondes',
    otherResponse: [
      '1 seconde',
      '5 secondes',
      '30 secondes'
    ]
  },
  {
    category: 'Info ou botox',
    question: "L'installation chirurgicale du patient fait partie des actes exclusifs de l'IBODE ?",
    image: null,
    response: 'Vrai',
    otherResponse: [
      'Faux'
    ]
  },
  {
    category: 'Info ou botox',
    question: "Lors d'une ablation de la thyroïde, le risque chirurgical majeur est la paralysie des cordes vocales par section du nerf récurrent",
    image: null,
    response: 'Vrai',
    otherResponse: [
      'Faux'
    ]
  },
  {
    category: 'Info ou botox',
    question: 'Si je suis sténosée, je peux créer un AVC.',
    image: null,
    response: "L'artère carotide interne",
    otherResponse: [
      "L'aorte",
      "L'atère ulnaire",
      "L'artère pylorique"
    ]
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
