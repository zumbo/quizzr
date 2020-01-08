import { Component, OnInit } from '@angular/core';
import { QuizQuestion } from '../data/quiz-question';
import { QuizzerService } from '../quizzer.service';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.css']
})
export class MultipleChoiceComponent implements OnInit {
  private correctIndex: number;
  private wrongIndex: number;
  private quizQuestion: QuizQuestion;

  constructor(private quizzerService: QuizzerService) { }

  ngOnInit() {
    this.updateQuestion();
  }

  updateQuestion() {
    this.correctIndex = -1;
    this.wrongIndex = -1;
    this.quizzerService.getQuestion().subscribe(q => this.quizQuestion = q);
  }

  hasAnswer(): boolean {
    return this.correctIndex > -1 || this.wrongIndex > -1;
  }

  onAnswer(answer: {index: number, text: string}) {
    this.quizzerService.submit(this.quizQuestion.id, answer.text)
    .subscribe(b => {
      if (b) {
        this.correctIndex = answer.index;
      } else {
        this.wrongIndex = answer.index;
      }
    }
      );
  }

  continue()  {
    this.updateQuestion();
  }

}
