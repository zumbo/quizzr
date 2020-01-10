import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Question } from '../data/question';
import { QuizzerService } from 'src/app/quizzer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit {
  questionForm: FormGroup;
  question: Question;
  id: number;

  constructor(private fb: FormBuilder,
              private quizzerService: QuizzerService,
              private route: ActivatedRoute,
              private router: Router) {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.question = { id: this.id, text: '', answer: '', wrongAnswers: ['', '', ''] };
  }

  ngOnInit() {
    this.buildForm();

    if (this.id > 0) {
      this.quizzerService.getQuestion(this.id).subscribe(q => {
         this.question = q;
         this.buildForm();
        });
    }
  }

  buildForm() {
    this.questionForm = this.fb.group({
      text: [this.question.text, Validators.required],
      answer: [this.question.answer, Validators.required],
      wrongAnswers: this.fb.array([])
    });
    const wrongAnswers = this.questionForm.get('wrongAnswers') as FormArray;
    for (const wrongAnswer of this.question.wrongAnswers) {
      wrongAnswers.push(this.fb.control(wrongAnswer, Validators.required));
    }
  }

  submitForm() {
    this.question = {...this.question, ...this.questionForm.value};
    if (this.id > 0) {
      this.quizzerService.updateQuestion(this.question).subscribe(q => {
        this.question = q;
        this.buildForm();
      });
    } else {
      this.quizzerService.insertQuestion(this.question).subscribe(q => {
        this.onBack();
      });
    }
  }

  onDelete() {
    this.quizzerService.deleteQuestion(this.id).subscribe(() => this.onBack());
  }

  onBack() {
    this.router.navigateByUrl('admin');
  }
}
