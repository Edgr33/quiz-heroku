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
      text: '¿Cuál es el nombre de la banda que escribió la canción "Hotel California"?',
      option1: 'Journey',
      option2: 'Eagles',
      option3: 'Led Zeppelin',
      option4: 'Aerosmith',
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

  TVQuestions: Question[] = [
    {
      text: '¿Qué artista es el que más veces ha visitado el festival de Viña del Mar',
      option1: 'Gloria Benavides',
      option2: 'Miguel Bosé',
      option3: 'Chayanne',
      option4: 'La Ley',
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
      text: '¿De qué trata la galardonada serie de AMC, “The Walking Dead”?',
      option1: 'Un grupo de vampiros jóvenes que aterrorizan a una pequeña ciudad',
      option2: 'Rebeldes en una sociedad antiutópica donde están prohibidos los libros',
      option3: 'Sobrevivientes de un apocalipsis de zombies',
      option4: 'Sobrevivientes de un evento similar al rapto donde la mitad de la humanidad desaparece',
      answer: '3'
    },
    {
      text: '¿De las novelas de cuál autor está adaptada la serie de HBO “Game of Thrones”?',
      option1: 'J.R.R. Tolkien',
      option2: 'E.L. James',
      option3: 'J.D. Robb',
      option4: 'George R.R. Martin',
      answer: '4'
    },
    {
      text: '¿En cuál de las siguientes peliculas no participo el actor Leonardo DiCaprio?',
      option1: 'Día de entrenamiento',
      option2: 'Titanic',
      option3: 'El lobo de Wall Street',
      option4: 'Django sin cadenas',
      answer: '1'
    },
    {
      text: '¿Cuál es el nombre del teniente de pelotón de Forrest en la película "Forrest Gump"?',
      option1: 'James Francis',
      option2: 'Dan Taylor',
      option3: 'William Hill',
      option4: 'Michael Horvarth',
      answer: '2'
    },
    {
      text: '¿En que pais fue producida la telenovela llamada "Qué culpa tiene Fatmagül"?',
      option1: 'India',
      option2: 'Palestina',
      option3: 'Turquia',
      option4: 'Malasia',
      answer: '3'
    },
    {
      text: '¿Quiénes fueron los animadores del festival de Viña en el año 2005, luego de que Antonio Vodanovic anunciara su retiro?',
      option1: 'Sergio Lagos y Myriam Hernández',
      option2: 'Felipe Camiroaga y Soledad Onetto',
      option3: 'Rafael Araneda y Eva Gómez',
      option4: 'Ricardo Montaner y Myriam Hernández',
      answer: '4'
    },
    {
      text: '¿Cuál es el nombre del personaje protagonizado por Vin Diesel en la serie de películas "Rapido y Furioso"?',
      option1: 'Dominic Toretto',
      option2: 'Sean Boswell',
      option3: `Brian O'Conner`,
      option4: 'Luke Hobbs',
      answer: '1'
    },
    {
      text: '¿En que departamento de hospital trabaja el doctor Gregory House, de la serie "Dr. House"?',
      option1: 'Pediatría',
      option2: 'Diagnóstico',
      option3: 'Oncología',
      option4: 'Cirugía',
      answer: '2'
    },
    {
      text: '¿Cuál es nombre de la raza de Frodo Bolsón, protagonista de la serie de películas "El Señor de los Anillos"?',
      option1: 'Elfo',
      option2: 'Duende',
      option3: 'Hobbit',
      option4: 'Orco',
      answer: '3'
    },
    {
      text: '¿Cuál fué la primera película que protagonizó el actor Dwayne Johnson, más conocido por su apodo "La Roca"?',
      option1: 'Rápido y Furioso',
      option2: 'Doom: la puerta del infierno',
      option3: 'Un espía y medio',
      option4: 'El rey Escorpión',
      answer: '4'
    },
    {
      text: '¿Cuál de los siguientes personajes no fué caracterizado por el rostro televisivo chileno, Felipe Camiroaga?',
      option1: 'Yerko Puchento',
      option2: 'Luciano Bello ',
      option3: 'El Washington',
      option4: 'El Charro que Canta Bonito',
      answer: '1'
    },
    {
      text: '¿Cuál era el apodo del animador del programa "Cachureos", Marcelo Hernández?',
      option1: 'Señor Lapiz',
      option2: 'Cabezón',
      option3: 'Epidemia',
      option4: 'Gato Juanito',
      answer: '2'
    },
    {
      text: '¿Cuántos años duró al aire el programa "Video Loco"?',
      option1: '3 años',
      option2: '8 años',
      option3: '11 años',
      option4: '18 años',
      answer: '3'
    },
    {
      text: 'La película "Una mujer fantástica" es la primera cinta chilena en obtener el Oscar a la Mejor Película Extranjera. ¿Quién es su director?',
      option1: 'Pablo Larraín',
      option2: 'Sebastián Silva',
      option3: 'Silvio Caiozzi',
      option4: 'Sebastián Lelio',
      answer: '4'
    },
    {
      text: '¿Cuál de los siguientes personajes del cómic e historias chilenas aún no ha llegado a la pantalla grande?',
      option1: 'Barrabases',
      option2: 'Condorito',
      option3: 'Mampato',
      option4: 'Papelucho',
      answer: '1'
    },
    {
      text: '¿En qué teleserie chilena, Álvaro Rudolphy interpretó a dos personajes? ',
      option1: 'Borrón y cuenta nueva',
      option2: 'Amores de Mercado',
      option3: 'Aquelarre',
      option4: 'Romané',
      answer: '2'
    },
    {
      text: '¿Cuál de estas teleseries se convirtió en la más larga de la historia de la TV en Chile? ',
      option1: 'Perdona Nuestros Pecados',
      option2: 'Quien',
      option3: 'Verdades Ocultas',
      option4: '¿Dónde está Elisa?',
      answer: '3'
    },
    {
      text: '¿Cuál de los hermanos Mercader en Machos interpretaba a un gay?',
      option1: 'Amaro Mercader',
      option2: 'Álex Mercader',
      option3: 'Armando Mercader',
      option4: 'Ariel Mercader',
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
    {
      text: '¿Cuál de los siguientes guerreros Jedi de la saga Star Wars se convirtió en el villano Darth Vader?',
      option1: 'Qui-Gon Jinn',
      option2: 'Anakin Skywalker',
      option3: 'Obi-Wan Kenobi',
      option4: 'Mace Windu',
      answer: '2'
    },
    {
      text: '¿Cuál es el nombre del hermano de Mario, de la serie de videojuegos "Mario Bros"?',
      option1: 'Wario',
      option2: 'Koppa',
      option3: 'Luigi',
      option4: 'Toad',
      answer: '3'
    },
    {
      text: '¿Qué pokemon fué el primer compañero del personaje Ash Ketchum en la serie de animación "Pokemon"?',
      option1: 'Charmander',
      option2: 'Butterfly',
      option3: 'Pidgeotto',
      option4: 'Pikachu',
      answer: '4'
    },
    {
      text: '¿Cuál es el nombre de la compañia desarrolladora de videojuegos que creó la franquicia "Persona"?',
      option1: 'Atlus',
      option2: 'Fromsoft',
      option3: 'Bandai',
      option4: 'Squaresoft',
      answer: '1'
    },
    {
      text: '¿Cuál de los siguientes personajes no es un villano de la serie de animación "Dragon Ball"?',
      option1: 'Freezer',
      option2: 'Orochimaru',
      option3: 'Majin-Boo',
      option4: 'Cell',
      answer: '2'
    },
    {
      text: '¿Cómo era conocido el grupo de caballeros protagonistas en la serie de animacion "Caballeros del Zodiaco"?',
      option1: 'Caballeros de Plata',
      option2: 'Caballeros Dorados',
      option3: 'Caballeros de Bronce',
      option4: 'Caballeros Legendarios',
      answer: '3'
    },
    {
      text: '¿Quiénes fueron los primeros 2 acompañantes del protagonista, en el videojuego titulado "Kingdom Hearts"?',
      option1: 'Hércules y Aladdin',
      option2: 'Simba y Tarzán',
      option3: 'Mickey y Pluto',
      option4: 'Donald y Goofy',
      answer: '4'
    },
    {
      text: '¿Cuál es la temática de la serie de videojuegos conocida como "Ace Combat"?',
      option1: 'Simulación de combates aéreos ',
      option2: 'Deportes extremos',
      option3: 'Carreras de autos',
      option4: 'Guerras intergalácticas',
      answer: '1'
    },
    {
      text: '¿Cuál es el nombre del protagonista de la serie de videojuegos conocida como "The Legend of Zelda"?',
      option1: 'Ganondorf',
      option2: 'Link',
      option3: 'Sheik',
      option4: 'Zelda',
      answer: '2'
    },
    {
      text: '¿En qué escenario esta basada la primera entrega de la serie de videojuegos "God of War"?',
      option1: 'Mitología Romana',
      option2: 'Mitología Egipcia',
      option3: 'Mitología Griega',
      option4: 'Mitología Indú',
      answer: '3'
    },
    {
      text: '¿Qué compañia fué la creadora del juego de cartas "Mitos y Leyendas"?',
      option1: 'Hasbro',
      option2: 'Wizards of the Coast',
      option3: 'Panini',
      option4: 'Salo',
      answer: '4'
    },
    {
      text: '¿Qué nombre se le dió a la primera edición del juego de cartas chileno "Mitos y Leyendas"?',
      option1: 'El Reto',
      option2: 'La Cofradía',
      option3: 'La Ira del Nahual',
      option4: 'Espiritu de Dragón',
      answer: '1'
    },
    {
      text: '¿Cuál es la identidad ficticia que utiliza el superheroe Superman?',
      option1: 'Peter Parker',
      option2: 'Clark Kent',
      option3: 'Bruce Banner',
      option4: 'Tony Stark',
      answer: '2'
    },
    {
      text: '¿Cuál es el poder del fundador de los X-Men, Charles Xavier, más conocido como Profesor X?',
      option1: 'Invisibilidad',
      option2: 'Teletransportación',
      option3: 'Telepatía',
      option4: 'Superfuerza',
      answer: '3'
    },
    {
      text: '¿Cuál de los siguientes artefactos no forma parte del universo de Marvel?',
      option1: 'El Teseracto',
      option2: 'Guantelete del Infinito',
      option3: 'La Gema del Alma',
      option4: 'Las Esferas del Dragón',
      answer: '4'
    },
    {
      text: '¿Cuál es el nombre del villano que logra reunir las Gemas del Infinito en el universo cinematográfico de Marvel?',
      option1: 'Thanos',
      option2: 'Doctor Muerte',
      option3: 'Apocalipsis',
      option4: 'Loki',
      answer: '1'
    },
    {
      text: '¿Cuál de las siguientes compañias tecnológicas no se ha dedicado nunca a la produccion de consolas de videojuegos?',
      option1: 'Microsoft',
      option2: 'Apple',
      option3: 'Sony',
      option4: 'Google',
      answer: '2'
    },
    {
      text: '¿Cuál es el nombre de la Consola de octava generación desarrollada por Nintendo y lanzada a la venta el año 2017?',
      option1: 'Super Nintendo',
      option2: 'Nintendo 64',
      option3: 'Nintendo Switch',
      option4: 'GameCube',
      answer: '3'
    },
    {
      text: '¿Cuál de las siguientes razas no pertenece al universo de "Starcraft"?',
      option1: 'Zerg',
      option2: 'Cryons',
      option3: 'Terran',
      option4: 'Protoss',
      answer: '2'
    },
  ]



  constructor() { }

  changeCategory(type: string) {
    this.category.next(type)
  }
}
