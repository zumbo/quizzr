import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Question } from '../data/question';
import { QuizzerService } from 'src/app/quizzer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  questionForm: FormGroup;
  question: Question;

  constructor(private fb: FormBuilder,
              private quizzerService: QuizzerService,
              private route: ActivatedRoute) {
    this.question = { id: 0, text: '', answer: '', wrongAnswers: ['', '', ''] };
   }

  ngOnInit() {
    this.buildForm();
    const id = +this.route.snapshot.paramMap.get('id');
    if (id > 0) {
      this.quizzerService.getQuestion(id).subscribe(q => {
         this.question = q; this.buildForm();
        });
    }
  }

  buildForm() {
    this.questionForm = this.fb.group({
      question: [this.question.text, Validators.required],
      answer: [this.question.answer, Validators.required],
      wrongAnswers: this.fb.array([])
    });
    const wrongAnswers = this.questionForm.get('wrongAnswers') as FormArray;
    for (const wrongAnswer of this.question.wrongAnswers) {
      wrongAnswers.push(this.fb.control(wrongAnswer, Validators.required));
    }
  }

  submitForm() {
  }

}
