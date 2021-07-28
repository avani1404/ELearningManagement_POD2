import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ARegisterSucessfulComponent } from './a-register-sucessful.component';

describe('ARegisterSucessfulComponent', () => {
  let component: ARegisterSucessfulComponent;
  let fixture: ComponentFixture<ARegisterSucessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ARegisterSucessfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ARegisterSucessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
