import { Component, OnInit, Input, Output } from '@angular/core';
import {JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  questionInfo;
  
  playerAnswer: string; 
  playerTotal = 0;
  showAnswer;

  constructor(private jeopardyService: JeopardyService){}

  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
          this.showAnswer = false;
        }
      )
  }

  clickSubmit() {
    if(this.playerAnswer == this.questionInfo.answer) {
      this.playerTotal = this.playerTotal + this.questionInfo.value
  } 
  this.showAnswer = true;
  this.playerAnswer = ""
  return this.playerTotal
}

  ngOnInit(){
    this.getDataFromService()
  }

}
