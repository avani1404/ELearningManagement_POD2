import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSucessfulComponent } from './register-sucessful.component';

describe('RegisterSucessfulComponent', () => {
  let component: RegisterSucessfulComponent;
  let fixture: ComponentFixture<RegisterSucessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSucessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
