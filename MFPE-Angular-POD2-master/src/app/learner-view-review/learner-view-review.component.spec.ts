import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerViewReviewComponent } from './learner-view-review.component';

describe('LearnerViewReviewComponent', () => {
  let component: LearnerViewReviewComponent;
  let fixture: ComponentFixture<LearnerViewReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerViewReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerViewReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
