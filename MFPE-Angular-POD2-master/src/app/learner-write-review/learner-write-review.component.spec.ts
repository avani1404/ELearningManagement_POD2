import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerWriteReviewComponent } from './learner-write-review.component';

describe('LearnerWriteReviewComponent', () => {
  let component: LearnerWriteReviewComponent;
  let fixture: ComponentFixture<LearnerWriteReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerWriteReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerWriteReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
