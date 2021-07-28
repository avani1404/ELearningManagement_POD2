import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerListReviewComponent } from './learner-list-review.component';

describe('LearnerListReviewComponent', () => {
  let component: LearnerListReviewComponent;
  let fixture: ComponentFixture<LearnerListReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerListReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerListReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
