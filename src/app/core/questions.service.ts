import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question } from '../question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  
  categoryArr = [
    {
    title: 'history',
    fullName: 'Historia de Chile'
    },
    {
    title: 'music',
    fullName: 'Música'
    },
    {
    title: 'tv',
    fullName: 'Cultura Pop y TV'
    },
    {
    title: 'nerd',
    fullName: 'Cultura Nerd'
    },
  ]

  private category = new BehaviorSubject<string>('history')

  category$ = this.category.asObservable()

  historyQuestions: Question[] = [
    {
      text: '¿Qué hecho histórico se conmemora el 18 de septiembre?',
      option1: 'Combate naval de Iquique',
      option2: 'La formación de la primera junta de gobierno',
      option3: 'Día de las Glorias del Ejercito',
      option4: 'Día Nacional de la Bandera',
      answer: '2'
    },
    {
      text: '¿Quién fue el primer Presidente de la República de Chile?',
      option1: 'Manuel Blanco Encalada',
      option2: 'Bernardo O’Higgins',
      option3: 'José Joaquín Prieto Vial',
      option4: 'Arturo Alessandri Palma',
      answer: '1'
    },
    {
      text: '¿Quién escribió el himno chileno?',
      option1: 'Germán Riesco',
      option2: 'Emiliano Figueroa',
      option3: 'Manuel Bulnes',
      option4: 'Eusebio Lillo',
      answer: '4'
    },
    {
      text: '¿Cuáles eran los colores de la primera bandera chilena?',
      option1: 'Blanca, azul, rojo',
      option2: 'Verde, cafe, negro',
      option3: 'Rojo, amarilla, cafe',
      option4: 'Azul, blanca, amarilla',
      answer: '4'
    },
    {
      text: '¿Cuál es el río más largo de Chile?',
      option1: 'Río Loa',
      option2: 'Río Maipo',
      option3: 'Río Illapel',
      option4: 'Río Salado',
      answer: '1'
    },
    {
      text: '¿Quién presidió como primer presidente de la primera Junta de Gobierno?',
      option1: 'José Miguel Carrera',
      option2: 'Mateo de Toro y Zambrano',
      option3: "Bernardo O'Higgins ",
      option4: 'Juan Martínez de Rozas',
      answer: '2'
    },
    {
      text: '¿Quién ganó el primer Premio Nobel de Literatura en Chile?',
      option1: 'Pablo Neruda',
      option2: 'Nicanor Parra',
      option3: 'Gabriela Mistral',
      option4: 'Vicente Huidobro',
      answer: '3'
    },
    {
      text: '¿Dónde ocurrió el terremoto de 1960?',
      option1: 'Iquique',
      option2: 'Valparaíso',
      option3: 'Valdivia',
      option4: 'Constitución',
      answer: '3'
    },
    {
      text: '¿Cuál es la última región creada en Chile?',
      option1: 'Región de Ñuble',
      option2: 'Región Los Lagos',
      option3: 'Región Metropolitana de Santiago',
      option4: 'Región del Maule',
      answer: '1'
    },
    {
      text: 'Cuando ocurrió la batalla de Maipú',
      option1: '18 de septiembre de 1810',
      option2: '5 de abril de 1818',
      option3: '21 de mayo de 1814',
      option4: '28 de enero de 1823',
      answer: '2'
    },
    {
      text: 'Cuales fueron las etapas de la independencia de Chile',
      option1: 'Descubrimiento, Conquista, República',
      option2: 'República Conservadora, República Liberal, República Parlamentaria',
      option3: 'Patria Vieja, Reconquista, Patria Nueva',
      option4: 'República Presidencial,	Dictadura militar,Transición a la democracia',
      answer: '3'
    },
    {
      text: '¿En qué año se celebró el primer congreso nacional?',
      option1: '1823',
      option2: '1840',
      option3: '1834',
      option4: '1811',
      answer: '4'
    },
    {
      text: '¿Qué ciudad fundó Pedro de Valdivia?',
      option1: 'Santiago',
      option2: 'Concepción',
      option3: 'Talca',
      option4: 'Valparaiso',
      answer: '1'
    },
    {
      text: '¿Qué hecho histórico ocurrió en chile el 11 de septiembre de 1973?',
      option1: 'Plebiscito nacional de Chile',
      option2: 'Golpe militar',
      option3: 'Una nueva constitución reestableció el gobierno presidencial',
      option4: 'Chile se independizó de España',
      answer: '2'
    },
    {
      text: '¿Quién fué el primer presidente de Chile luego de la dictadura?',
      option1: 'Sebastián Piñera Echenique',
      option2: 'Eduardo Frei Ruiz-Tagle',
      option3: 'Patricio Aylwin Azócar',
      option4: 'Jorge Alessandri Rodríguez',
      answer: '3'
    },
    {
      text: '¿A qué paises tuvo que enfrentarse Chile en la guerra del Pacífico?',
      option1: 'Argentina y Paraguay',
      option2: 'Uruguay y Colombia',
      option3: 'Cuba y Venezuela',
      option4: 'Perú y Bolivia',
      answer: '4'
    },
    {
      text: '¿Cuál es el nombre del buque más importante capturado por Chile en el combate naval de Iquique?',
      option1: 'Huáscar',
      option2: 'Independencia',
      option3: 'Manco Cápac',
      option4: 'Atahualpa',
      answer: '1'
    },
    {
      text: '¿Cuál es el nombre de la fragata chilena que estuvo al mando de Arturo Prat durante el combate naval de Iquique?',
      option1: 'Independencia',
      option2: 'Esmeralda',
      option3: 'Covadonga',
      option4: 'Lamar',
      answer: '2'
    },
    {
      text: '¿En qué region se encuentra la montaña más alta de Chile, llamada Ojos del Salado?',
      option1: 'Región de Arica y Parinacota',
      option2: 'Región del Biobío',
      option3: 'Región de Atacama',
      option4: "Región del Libertador General Bernardo O'Higgins",
      answer: '3'
    },
    {
      text: '¿En qué ciudad nació el famoso poeta chileno Pablo Neruda?',
      option1: 'Santiago ',
      option2: 'Iquique',
      option3: 'Valparaíso',
      option4: 'Parral',
      answer: '4'
    },
  ]

  musicQuestions: Question[] = [
    {
      text: '¿Que cantante es conocido como el rey del pop?',
      option1: 'Michael Jackson',
      option2: 'Prince',
      option3: 'Eric Clapton',
      option4: 'Bob Marley',
      answer: '1'
    },
    {
      text: '¿A qué presidente Estadounidense le cantó Madonna para su cumpleaños?',
      option1: 'Bill Clinton',
      option2: 'John Kennedy',
      option3: 'George W. Bush',
      option4: 'Joe Biden',
      answer: '2'
    },
    {
      text: '¿De qué país son originarios los Beatles?',
      option1: 'Escocia',
      option2: 'Estados Unidos',
      option3: 'Inglaterra',
      option4: 'Australia',
      answer: '3'
    },
    {
      text: '¿Cual es el nombre del album debut de la cantante Britney Spears?',
      option1: 'Oops!... I Did It Again',
      option2: 'Toxic',
      option3: 'Circus',
      option4: ' ...Baby One More Time',
      answer: '4'
    },
    {
      text: '¿Cuál es la canción más reproducida en Spotify hasta el momento?',
      option1: 'Ed Sheeran, The Shape of You',
      option2: 'Luis Fonsi, Despacito',
      option3: "Dua Lipa, Don't Start Now",
      option4: 'Maluma, Hawái',
      answer: '1'
    },
    {
      text: '¿Qué banda americana se llamaba originalmente, “Kara’s Flowers”?',
      option1: 'The Doors',
      option2: 'Maroon 5',
      option3: 'Artic Monkeys',
      option4: 'Nirvana',
      answer: '2'
    },
    {
      text: '¿Cuál de los siguientes artistas tiene como nombre real, Ramón Luis Ayala Rodríguez?',
      option1: 'Maluma',
      option2: 'Don Omar',
      option3: 'Daddy Yankee',
      option4: 'Tito El Bambino',
      answer: '3'
    },
    {
      text: '¿En que país nació el cantante Ricardo Arjona?',
      option1: 'Colombia',
      option2: 'Puerto Rico',
      option3: 'México',
      option4: 'Guatemala',
      answer: '4'
    },
    {
      text: '¿A cuál de los siguientes cantantes pertenece la canción, "Despacito"?',
      option1: 'Luis Fonsi',
      option2: 'Maluma',
      option3: 'Bad Bunny',
      option4: 'Calle 13',
      answer: '1'
    },
    {
      text: 'Cuántos premios Grammy ha ganado Taylor Swift¿?',
      option1: '5',
      option2: '10',
      option3: '3',
      option4: '14',
      answer: '2'
    },
    {
      text: '¿Qué banda tiene más premios Grammy en toda la historia?',
      option1: 'Dixie Chicks',
      option2: 'Metallica',
      option3: 'U2',
      option4: 'Maroon 5',
      answer: '3'
    },
    {
      text: '¿Cuál es la canción que ha durado más tiempo en el #1 en las listas de éxitos de Estados Unidos?',
      option1: '"Someone Like You" de Adele',
      option2: '"Thinking Out Loud" de Ed Sheeran',
      option3: `"Don't Stop Believin'" de Journey`,
      option4: '"Old Town Road" de Lil Nas X',
      answer: '4'
    },
    {
      text: '¿Qué artista popular nunca ha ganado un Grammy?',
      option1: 'Katy Perry',
      option2: 'Rihanna',
      option3: 'Justin Bieber',
      option4: 'Dua Lipa',
      answer: '1'
    },
    {
      text: '¿Cuántos años tenía Lady Gaga cuando lanzó su primer éxito, "Just Dance"?',
      option1: '21',
      option2: '22',
      option3: '18',
      option4: '30',
      answer: '2'
    },
    {
      text: '¿Qué cantante es considerado “El Rey del Rock and Roll”?',
      option1: 'Eric Clapton',
      option2: 'Jimi Hendrix',
      option3: 'Elvis Presley.',
      option4: 'Axl Rose',
      answer: '3'
    },
    {
      text: '¿Qué rockero es recordado por haber “incendiado” su guitarra?',
      option1: 'Slash',
      option2: 'Dave Mustaine',
      option3: 'Steve Vai',
      option4: 'Jimi Hendrix.',
      answer: '4'
    },
    {
      text: '¿De quién es la famosa canción de rock Stairway to Heaven?',
      option1: 'Led Zeppelin',
      option2: `Guns N' Roses`,
      option3: 'Pink Floyd',
      option4: 'Eagles',
      answer: '1'
    },
    {
      text: '¿A qué banda pertenece el bajista y vocalista Lemmy Kilmister?',
      option1: 'Disturbed',
      option2: 'Motorhead',
      option3: 'System of a Down',
      option4: 'Led Zeppelin',
      answer: '2'
    },
    {
      text: '¿Quién fue el primer guitarrista de Metallica junto a James Hetfield?',
      option1: 'Kirk Hammett',
      option2: 'Cliff Burton',
      option3: 'Ron McGovney',
      option4: 'Dave Mustaine',
      answer: '3'
    },
    {
      text: '¿Qué instrumento musical tocaba Angus Young de la banda de rock AC/DC?',
      option1: 'Bajo',
      option2: 'Teclado',
      option3: 'Bateria',
      option4: 'Guitarra Eléctrica',
      answer: '4'
    },
  ]

  nerdQuestions: Question[] = [
    {
      text: '¿Como se llama la estación espacial imperial mas fuerte en la saga de Star Wars?',
      option1: 'Estrella de la muerte',
      option2: 'Destructor Estelar',
      option3: 'Lanzadera imperial',
      option4: 'Supremacy',
      answer: '1'
    },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '2'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '3'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '4'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '1'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '2'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '3'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '4'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '1'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '2'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '3'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '4'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '1'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '2'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '3'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '4'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '1'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '2'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '3'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '4'
    // },
  ]

  TVQuestions: Question[] = [
    {
      text: '¿Qué artista es el que más veces ha visitado el festival de Viña ',
      option1: 'Gloria Benavides',
      option2: 'Miguel Bosé',
      option3: 'Chayanne',
      option4: 'La Ley',
      answer: '1'
    },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '2'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '3'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '4'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '1'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '2'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '3'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '4'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '1'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '2'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '3'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '4'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '1'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '2'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '3'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '4'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '1'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '2'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '3'
    // },
    // {
    //   text: '¿?',
    //   option1: '',
    //   option2: '',
    //   option3: '',
    //   option4: '',
    //   answer: '4'
    // },
  ]

  constructor() { }

  changeCategory(type: string) {
    this.category.next(type)
  }
}
