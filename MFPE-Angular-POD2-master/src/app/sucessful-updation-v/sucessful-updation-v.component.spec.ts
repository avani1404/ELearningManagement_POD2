import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfulUpdationVComponent } from './sucessful-updation-v.component';

describe('SucessfulUpdationVComponent', () => {
  let component: SucessfulUpdationVComponent;
  let fixture: ComponentFixture<SucessfulUpdationVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessfulUpdationVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessfulUpdationVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
