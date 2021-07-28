import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerEditprofileComponent } from './learner-editprofile.component';

describe('LearnerEditprofileComponent', () => {
  let component: LearnerEditprofileComponent;
  let fixture: ComponentFixture<LearnerEditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerEditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
