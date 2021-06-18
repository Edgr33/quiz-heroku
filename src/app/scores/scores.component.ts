import { Component, OnInit } from '@angular/core';

import { ScoreService } from '../core/score.service';
import { Score } from '../score.model';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  scoreList:Score

  ranking: number = 1

  test

  constructor(
    private scoreService: ScoreService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchScores()
    }, 3000);
  }

  fetchScores() {
    let sortedArray
    this.scoreService.getAllScores()
      .subscribe(scores => {

        sortedArray = scores.sort((a,b) => {
          return b.score - a.score
        })
        
        this.scoreList = sortedArray
      }
    )
  }

}
