import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  adminForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.adminForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
      wrongAnswers: this.fb.array([
        ['', Validators.required],
        ['', Validators.required],
        ['', Validators.required]])
    });
  }

  submitForm() {
  }

}
