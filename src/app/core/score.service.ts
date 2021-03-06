import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Score } from '../score.model';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(
    private http: HttpClient
  ) { }

  getAllScores() {
    return this.http.get<Score[]>(environment.db_scores_url)
  }

  createScore(score: Score) {
    return this.http.post(environment.db_scores_url, score)
  }

}
