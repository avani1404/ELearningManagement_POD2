import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerSubscriptionComponent } from './learner-subscription.component';

describe('LearnerSubscriptionComponent', () => {
  let component: LearnerSubscriptionComponent;
  let fixture: ComponentFixture<LearnerSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
