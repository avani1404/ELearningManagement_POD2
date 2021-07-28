import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LLoginComponent } from './l-login.component';

describe('LLoginComponent', () => {
  let component: LLoginComponent;
  let fixture: ComponentFixture<LLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
