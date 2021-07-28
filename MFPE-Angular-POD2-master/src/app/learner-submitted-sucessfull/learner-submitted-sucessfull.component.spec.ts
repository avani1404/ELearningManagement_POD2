import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerSubmittedSucessfullComponent } from './learner-submitted-sucessfull.component';

describe('LearnerSubmittedSucessfullComponent', () => {
  let component: LearnerSubmittedSucessfullComponent;
  let fixture: ComponentFixture<LearnerSubmittedSucessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerSubmittedSucessfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerSubmittedSucessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
