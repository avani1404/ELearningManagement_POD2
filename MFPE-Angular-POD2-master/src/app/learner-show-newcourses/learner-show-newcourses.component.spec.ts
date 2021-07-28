import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerShowNewcoursesComponent } from './learner-show-newcourses.component';

describe('LearnerShowNewcoursesComponent', () => {
  let component: LearnerShowNewcoursesComponent;
  let fixture: ComponentFixture<LearnerShowNewcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerShowNewcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerShowNewcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
