import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVeditServiceFormComponent } from './a-vedit-service-form.component';

describe('AVeditServiceFormComponent', () => {
  let component: AVeditServiceFormComponent;
  let fixture: ComponentFixture<AVeditServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVeditServiceFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVeditServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
