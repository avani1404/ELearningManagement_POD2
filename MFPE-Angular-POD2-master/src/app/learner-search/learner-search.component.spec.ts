import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerSearchComponent } from './learner-search.component';

describe('LearnerSearchComponent', () => {
  let component: LearnerSearchComponent;
  let fixture: ComponentFixture<LearnerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
