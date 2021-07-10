import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router/'
import { FormControl, Validators } from '@angular/forms'

import { QuestionsService } from '../core/questions.service';
import { ScoreService } from '../core/score.service';
import { Question } from '../question.model';
import { Score } from '../score.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  //valor de respuesta asignada a cada input
  option: any

  //array de preguntas
  allQuestions: Question[]

  //numero al azar para seleccionar pregunta
  questionRandomizer: number

  //pregunta seleccionada
  question: Question

  //contador de tiempo
  timer: number = 10

  //funcion de intervalo de tiempo en que baja el contador
  interval: any

  //estado de respuesta (correcta / incorrecta)
  correctAnswer: boolean

  //puntaje
  score: number = 0

  nameField: FormControl

  //nombre del jugador
  name: string

  //estado del quiz 
  quizStatus: string = 'question'

  //contador de preguntas
  questionCounter: number = 0

  constructor(
    private questionsService: QuestionsService,
    private scoreService: ScoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.generatequestionary()
    

    this.nameField = new FormControl ('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]);
  }

  generatequestionary() {
    let category: string

    this.questionsService.category$
    .subscribe(value => {
      console.log(value)
      category = value

      switch(category) {
        case 'history': this.allQuestions = this.questionsService.historyQuestions
        break;
        case 'music': this.allQuestions = this.questionsService.musicQuestions
        break;
        case 'nerd': this.allQuestions = this.questionsService.nerdQuestions
        break;
        case 'tv': this.allQuestions = this.questionsService.TVQuestions
      }

      this.generateQuestion()
    })
  }

  generateQuestion() {
    if (this.questionCounter < 10) {
      
      this.questionRandomizer = Math.floor(Math.random() * this.allQuestions.length)
      this.question = this.allQuestions[this.questionRandomizer]
  
      this.option = null
      this.quizStatus = 'question'
  
      this.interval = setInterval(() => {
        this.timer -= 1
        // console.log(this.timer)
        if (this.timer === 0) {
          this.answer()
          clearInterval(this.interval)
        }
      }, 1000);
  
      this.interval
      this.questionCounter++
    }
  }

  answer() {
    if (this.option === this.question.answer) {
      this.correctAnswer = true
      this.score++
    } else this.correctAnswer = false

    if (this.questionCounter < 10)
      this.quizStatus = 'nextQuestion'
    else this.quizStatus = 'finished'

    clearInterval(this.interval)
    this.timer = 10
    this.allQuestions.splice(this.questionRandomizer, 1)
    // console.log(this.allQuestions)
    // console.log(this.quizStatus)
  }

  click: boolean = false
  saveScore() {
    let newScore: Score = {
      name: this.name,
      score: this.score
    }

    this.click = true

    this.scoreService.createScore(newScore)
    .subscribe(data => {
      console.log(data)
      this.router.navigate(['scores'])
    })
  }

  pickOption (answer: string) {
    this.option = answer
  }
}
