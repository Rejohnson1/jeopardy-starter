import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jeopardy-judge',
  templateUrl: './jeopardy-judge.component.html',
  styleUrls: ['./jeopardy-judge.component.css']
})
export class JeopardyJudgeComponent implements OnInit {

  constructor() { }


  playerAnswer;
  playerTotal = 0;

  @Input() questionInfo;
  @Output() scoreCompleted = new EventEmitter(); 

 
  clickSubmit(): void {
    if (this.playerAnswer == this.questionInfo.answer) {
      this.playerTotal = this.playerTotal + this.questionInfo.value
         }
         this.playerAnswer = "";
         this.scoreCompleted.emit();
         }
  
  ngOnInit() {
  }

}
