import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../core/questions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private questionService: QuestionsService
  ) { }

  ngOnInit(): void {
  }

  checkCategory() {
    this.questionService.category$
    .subscribe(value => {
      console.log(value)
    })
  }

  selectCategory(type: string) {
    this.questionService.changeCategory(type)
  }

}
