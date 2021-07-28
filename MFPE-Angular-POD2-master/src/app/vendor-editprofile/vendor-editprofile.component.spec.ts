import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorEditprofileComponent } from './vendor-editprofile.component';

describe('VendorEditprofileComponent', () => {
  let component: VendorEditprofileComponent;
  let fixture: ComponentFixture<VendorEditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorEditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
