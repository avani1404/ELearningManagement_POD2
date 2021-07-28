import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfulUpdationAComponent } from './sucessful-updation-a.component';

describe('SucessfulUpdationAComponent', () => {
  let component: SucessfulUpdationAComponent;
  let fixture: ComponentFixture<SucessfulUpdationAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessfulUpdationAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessfulUpdationAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
