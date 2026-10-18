export const bio = [
  `Ettore Biagi (alias badpure) is a clarinetist, electroacoustic performer, artistic researcher, writer, and visual artist based in Vienna and active on the international classical and contemporary music scene.`,
  `As a clarinetist, he has performed with ensembles such as the London Symphony Orchestra, the Orchestre de Radio France, the Klangforum Wien, the Ensemble Intercontemporain, the Orchestra of the Accademia Nazionale di Santa Cecilia, and the Orchestra del Maggio Musicale Fiorentino.`,
  `In these contexts, he has collaborated—both as principal clarinetist and bass clarinetist—with some of the leading conductors and composers on the international scene, including Sir Simon Rattle, Zubin Mehta, Daniel Barenboim, Riccardo Chailly, Peter Eötvös, Matthias Pintscher, Sir Antonio Pappano, Fabio Luisi, Gianandrea Noseda, Lorenzo Viotti, Beat Furrer, George Benjamin, Helmuth Lachenmann, Enno Poppe, Wolfgang Rihm, Tyshwan Sorey, Liza Lim, George Lewis, Rebecca Saunders, and many others. He has also performed in chamber music concerts with members of the Berlin Philharmonic, the Staatskapelle Dresden, and the Lucerne Festival Orchestra, as well as with the Indaco Quartet and members of the Cremona Quartet.`,
  `In 2026, he served as guest bass clarinetist with the renowned Dutch woodwind quintet Calefax, with whom he performed at Wigmore Hall in London and conducted master classes in chamber music and clarinet at the conservatories in The Hague and Amsterdam.`,
  `As a member of the Lucerne Festival Contemporary Leaders, from 2021 to 2025 he served as a coach for wind instruments at the Lucerne Festival Academy and co-organized the contemporary music festival Lucerne Festival Forward, curating its program for four editions.`,
  `He has performed at the most prestigious concert halls and musical institutions in Europe and around the world, including the Salzburg Festspiele, the Wiener Konzerthaus, the Philharmonie de Paris, the Philharmonie Berlin, the Elbphilharmonie in Hamburg, the KKL in Lucerne, the Barbican Centre in London, the Tivoli Concert Hall in Utrecht, the Muziekgebouw in Amsterdam, Helsinki Musica Nova, the IRCAM at the Centre Pompidou, the Pierre Boulez Saal, MusikFest Berlin, the Théâtre du Châtelet, the Festival d'Automne in Paris, the MUPA in Budapest, the Britten-Pears Foundation in Snape Maltings, the Royaumont Foundation, the Dijon Opera, the ManiFeste Festival, and in numerous other venues.`,
  `Since 2022, he has been pursuing a Ph.D. in the Doctor Artium artistic research program at the University of Music and Performing Arts Vienna—his dissertation focuses on the analysis of mediatized art consumption through the development of experimental approaches to multidisciplinary co-creation with non-professional artists in the urban context of Vienna. His research is informed by theoretical frameworks drawn from Hartmut Rosa's sociology and Arthur Benjamin's philosophy of media communication.`,
  `In 2026, he developed his first digitally augmented bass clarinet key: a live electronics control system for improvisation based on direct instrumental control of spectral fusion processes, image generation, and text generation.`,
  `Since 2022, he has been a co-founder of the CODEC electroacoustic ensemble in Assisi, alongside Stefano Alessandretti, Gaston Polle Ansaldi, Leonardo De Marchi, and Giacomo Piermatti. Since 2024, he has been a co-founder of the Vienna-based multimedia improvisation collective knot, alongside Aya Masui and Tian Fu, with whom he has also curated the aNOther contemporary performing arts festival since 2025.`,
  `He writes poetry in English language.`,
];

export interface DomainLink {
  label: string;
  href: string;
}

export interface Domain {
  id: string;
  label: string;
  kicker: string;
  links: DomainLink[];
  hoverImages?: string[];
}

export const domains: Domain[] = [
  {
    id: 'audio',
    label: 'audio',
    kicker: 'sound, performance, release',
    links: [
      { label: 'interpretation', href: 'audio/interpretation' },
      { label: 'improvisation', href: 'audio/improvisation' },
      { label: 'knot collective', href: 'audio/knot-collective' },
      { label: 'codec ensemble', href: 'audio/codec-ensemble' },
    ],
  },
  {
    id: 'visual',
    label: 'visual',
    kicker: 'drawing, painting, moving image',
    links: [
      { label: 'hand-drawings', href: 'visual/hand-drawings' },
      { label: 'paintings', href: 'visual/paintings' },
      { label: '3d animation', href: 'visual/3d-animation' },
    ],
    hoverImages: [
      'images/home/hands-01.jpg',
      'images/home/hands-02.jpg',
      'images/home/hands-03.jpg',
      'images/home/hands-04.jpg',
      'images/home/hands-05.jpg',
      'images/home/minerals-01.jpg',
      'images/home/minerals-02.jpg',
      'images/home/minerals-03.jpg',
      'images/home/minerals-04.jpg',
      'images/home/minerals-05.jpg',
      'images/home/faces-01.jpg',
      'images/home/faces-02.jpg',
      'images/home/faces-03.jpg',
      'images/home/thousand-01.jpg',
      'images/home/thousand-02.jpg',
    ],
  },
  {
    id: 'poetry',
    label: 'poetry',
    kicker: 'writing in english',
    links: [{ label: 'poetry', href: 'poetry' }],
  },
];
