import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerCourseDescriptionComponent } from './learner-course-description.component';

describe('LearnerCourseDescriptionComponent', () => {
  let component: LearnerCourseDescriptionComponent;
  let fixture: ComponentFixture<LearnerCourseDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerCourseDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerCourseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
