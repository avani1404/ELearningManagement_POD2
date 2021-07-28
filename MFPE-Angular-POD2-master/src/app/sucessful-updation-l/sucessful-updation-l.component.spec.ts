import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfulUpdationLComponent } from './sucessful-updation-l.component';

describe('SucessfulUpdationLComponent', () => {
  let component: SucessfulUpdationLComponent;
  let fixture: ComponentFixture<SucessfulUpdationLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessfulUpdationLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessfulUpdationLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
