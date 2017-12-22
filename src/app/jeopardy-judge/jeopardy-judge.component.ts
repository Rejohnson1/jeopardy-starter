import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-jeopardy-judge',
  templateUrl: './jeopardy-judge.component.html',
  styleUrls: ['./jeopardy-judge.component.css']
})
export class JeopardyJudgeComponent implements OnInit {

  constructor() { }

  @Input() questionInfo;
  @Output() playerTotal= 0

  //playerTotal = 0;

  playerAnswer;
  showAnswer;

  clickSubmit() {
    if (this.playerAnswer == this.questionInfo.answer) {
      this.playerTotal = this.playerTotal + this.questionInfo.value
         }
    this.playerAnswer = ""
   }
  
  ngOnInit() {
  }

}
