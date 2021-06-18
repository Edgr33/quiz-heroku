import { Injectable } from '@angular/core';
import { Question } from '../question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  allQuestions: Question[] = [
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

  constructor() { }
}
