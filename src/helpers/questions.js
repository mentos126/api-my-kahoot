import shuffle from 'lodash.shuffle'

const itsCleanQuestions = [
  /**
   * C'est du propre
   */
  {
    category: "C'est du propre",
    question: "Le temps de séchage d'un antiseptique alcoolique majeur lors de la préparation cutanée de l'opéré est de :",
    image: 'https://www.infirmiers.com/images/grands-dossier/hygiene/preparation-cutanee-bloc-g.jpg',
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
    image: 'https://www.cliniquedelacroixdor.ch/wp-content/uploads/2017/05/Epilation-torse_laser-copie.jpg',
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
    image: 'https://lh3.googleusercontent.com/proxy/NkEx5K3jvpRAUfnEas0cLAmiO0Q6jlUYb9bEqdYYNnqiLUpLk6mTQ8xFHLVr0kphFX-7jCDzprke1ZtR6zMAb0zOKSaqPxcbvC_p4GXtuIWDzHUdcL765lJm83yfH3RvYo_aSXtBVwXddHGIIzDkTptI7EU',
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
    image: 'https://www.realme.fr/10584-thickbox_default/garrot-chirurgical-spengler-dts-3000.jpg',
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
    image: 'https://pbs.twimg.com/media/DaROHuyVwAU-dYR.jpg',
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
    image: 'https://www.ugap.fr/images/media-wp/2018/07/Loupe_ofcf_fl516r_400.jpg',
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
    image: 'https://www.realme.fr/10584-thickbox_default/garrot-chirurgical-spengler-dts-3000.jpg',
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
    image: 'https://www.studymapper.fr/assets/var/img-droit.jpg',
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
    image: 'https://www.hosppe.com/images/newsHero/digestif-0.png',
    response: 'est vascularisée par l’artère cystique',
    otherResponse: [
      'est située dans l’épigastre',
      'produit la bile'
    ]
  },
  {
    category: 'Fais pas la moue',
    question: "Qu'est-ce qu'une promontofixation ?",
    image: 'https://www.hosppe.com/images/newsHero/digestif-0.png',
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
    image: 'https://www.hosppe.com/images/newsHero/digestif-0.png',
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
    image: 'https://live.staticflickr.com/5173/5467159695_24ab1825c8_b.jpg',
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
    image: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/5/c/b/5cb474dd85_121782_cerveau-3d.jpg',
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
    image: 'https://www.medespoir.ch/images/implantation-lentille-intraoculaire.jpg',
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
    image: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t1.6435-9/50502890_2296127217336270_8839646537505046528_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=tuP3Z1ZX3zIAX8oIzNX&_nc_ht=scontent-cdg2-1.xx&oh=31d4798882e13a16f765f04438d8b054&oe=618ECDAE',
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
    image: 'https://d3q6g0wvbller4.cloudfront.net/wp-content/uploads/2020/11/installations-chirurgicales-1024x732.jpg',
    response: 'Vrai',
    otherResponse: [
      'Faux'
    ]
  },
  {
    category: 'Info ou botox',
    question: "Lors d'une ablation de la thyroïde, le risque chirurgical majeur est la paralysie des cordes vocales par section du nerf récurrent",
    image: 'https://www.medisite.fr/files/styles/pano_xxxl/public/images/article/0/2/2/2488220/4121238-inline.jpg?itok=blKHHfyR',
    response: 'Vrai',
    otherResponse: [
      'Faux'
    ]
  },
  {
    category: 'Info ou botox',
    question: 'Si je suis sténosée, je peux créer un AVC, qui suis-je ?',
    image: 'https://www.handicap.fr/static/contenu/img3/avc-prise-en-charge-10431.jpg',
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
