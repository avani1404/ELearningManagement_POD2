import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerListofServicesComponent } from './learner-listof-services.component';

describe('LearnerListofServicesComponent', () => {
  let component: LearnerListofServicesComponent;
  let fixture: ComponentFixture<LearnerListofServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerListofServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerListofServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
