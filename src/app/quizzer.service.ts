import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizQuestion } from './quiz/data/quiz-question';

@Injectable({
  providedIn: 'root'
})
export class QuizzerService {
  getQuestion(): Observable<QuizQuestion> {
    return this.http.get<QuizQuestion>('http://localhost:8080/api/question');
  }

  submit(id: number, answer: string): Observable<boolean> {
    return this.http.post<boolean>('http://localhost:8080/api/checkAnswer', { id, answer });
  }

  constructor(private http: HttpClient) { }
}
