import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerOnlineservicespageComponent } from './learner-onlineservicespage.component';

describe('LearnerOnlineservicespageComponent', () => {
  let component: LearnerOnlineservicespageComponent;
  let fixture: ComponentFixture<LearnerOnlineservicespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerOnlineservicespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerOnlineservicespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
