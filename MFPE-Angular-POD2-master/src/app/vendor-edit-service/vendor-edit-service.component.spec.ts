import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorEditServiceComponent } from './vendor-edit-service.component';

describe('VendorEditServiceComponent', () => {
  let component: VendorEditServiceComponent;
  let fixture: ComponentFixture<VendorEditServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorEditServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorEditServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
