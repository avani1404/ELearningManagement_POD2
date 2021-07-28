import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerCompletedSucessfullyComponent } from './learner-completed-sucessfully.component';

describe('LearnerCompletedSucessfullyComponent', () => {
  let component: LearnerCompletedSucessfullyComponent;
  let fixture: ComponentFixture<LearnerCompletedSucessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerCompletedSucessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerCompletedSucessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
