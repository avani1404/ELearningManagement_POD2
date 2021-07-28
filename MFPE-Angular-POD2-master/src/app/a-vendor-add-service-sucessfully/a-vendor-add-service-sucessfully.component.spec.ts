import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorAddServiceSucessfullyComponent } from './a-vendor-add-service-sucessfully.component';

describe('AVendorAddServiceSucessfullyComponent', () => {
  let component: AVendorAddServiceSucessfullyComponent;
  let fixture: ComponentFixture<AVendorAddServiceSucessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorAddServiceSucessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorAddServiceSucessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
