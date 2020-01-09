import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  @Input() index: number;
  @Input() text: string;
  @Input() correct: boolean;
  @Input() wrong: boolean;
  @Input() disabled: boolean;
  @Output() answer = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitAnswer() {
    this.answer.emit({index: this.index, text: this.text});
 }

}
