import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionsService } from '../core/questions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  category: string = 'history'

  categoryArr = this.questionService.categoryArr

  constructor(
    private questionService: QuestionsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // checkCategory() {
  //   this.questionService.category$
  //   .subscribe(value => {
  //     console.log(value)
  //   })
  // }

  selectCategory(type: string) {
    this.questionService.changeCategory(type)

    this.router.navigate(['quiz'])
  }

}
