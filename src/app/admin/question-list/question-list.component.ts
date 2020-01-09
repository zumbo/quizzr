import { Component, OnInit } from '@angular/core';
import { Question } from '../data/question';
import { QuizzerService } from 'src/app/quizzer.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: Question[];

  constructor(private quizzerService: QuizzerService) { }

  ngOnInit() {
    this.quizzerService.getAllQuestions().subscribe(q => this.questions = q);
  }

}
