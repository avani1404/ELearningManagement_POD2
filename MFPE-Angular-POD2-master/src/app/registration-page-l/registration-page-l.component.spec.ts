import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPageLComponent } from './registration-page-l.component';

describe('RegistrationPageLComponent', () => {
  let component: RegistrationPageLComponent;
  let fixture: ComponentFixture<RegistrationPageLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationPageLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPageLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
