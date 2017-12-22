import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeopardyJudgeComponent } from './jeopardy-judge.component';

describe('JeopardyJudgeComponent', () => {
  let component: JeopardyJudgeComponent;
  let fixture: ComponentFixture<JeopardyJudgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeopardyJudgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeopardyJudgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
