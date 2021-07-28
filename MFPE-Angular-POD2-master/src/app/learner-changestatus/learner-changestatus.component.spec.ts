import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerChangestatusComponent } from './learner-changestatus.component';

describe('LearnerChangestatusComponent', () => {
  let component: LearnerChangestatusComponent;
  let fixture: ComponentFixture<LearnerChangestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerChangestatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerChangestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
