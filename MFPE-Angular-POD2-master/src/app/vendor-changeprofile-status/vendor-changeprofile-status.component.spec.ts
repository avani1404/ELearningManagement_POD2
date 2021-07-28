import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorChangeprofileStatusComponent } from './vendor-changeprofile-status.component';

describe('VendorChangeprofileStatusComponent', () => {
  let component: VendorChangeprofileStatusComponent;
  let fixture: ComponentFixture<VendorChangeprofileStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorChangeprofileStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorChangeprofileStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
