import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfulUpdationComponent } from './sucessful-updation.component';

describe('SucessfulUpdationComponent', () => {
  let component: SucessfulUpdationComponent;
  let fixture: ComponentFixture<SucessfulUpdationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessfulUpdationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessfulUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
