import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorAddServiceSucessfullyComponent } from './vendor-add-service-sucessfully.component';

describe('VendorAddServiceSucessfullyComponent', () => {
  let component: VendorAddServiceSucessfullyComponent;
  let fixture: ComponentFixture<VendorAddServiceSucessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorAddServiceSucessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorAddServiceSucessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
