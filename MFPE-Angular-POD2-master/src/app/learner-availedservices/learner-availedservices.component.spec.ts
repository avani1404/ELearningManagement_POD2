import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerAvailedservicesComponent } from './learner-availedservices.component';

describe('LearnerAvailedservicesComponent', () => {
  let component: LearnerAvailedservicesComponent;
  let fixture: ComponentFixture<LearnerAvailedservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerAvailedservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerAvailedservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
