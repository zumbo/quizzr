import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizQuestion } from './quiz/data/quiz-question';
import { Question } from './admin/data/question';

@Injectable({
  providedIn: 'root'
})
export class QuizzerService {
  constructor(private http: HttpClient) { }

  private const url = 'http://localhost:8080/';

  getQuizQuestion(): Observable<QuizQuestion> {
    return this.http.get<QuizQuestion>(this.url + 'api/question');
  }

  submit(id: number, answer: string): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'api/checkAnswer', { id, answer });
  }

  getQuestion(id: number): Observable<Question> {
    return this.http.get<Question>(this.url + 'admin/questions/' + id);
  }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.url + 'admin/questions');
  }

  insertQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.url + 'admin/questions', question);
  }

  updateQuestion(question: Question): Observable<Question> {
    return this.http.put<Question>(this.url + 'admin/questions/' + question.id, question);
  }

  deleteQuestion(id: number) {
    this.http.delete<Question>(this.url + 'admin/questions/' + id);
  }
}
