import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorEditprofileComponent } from './a-vendor-editprofile.component';

describe('AVendorEditprofileComponent', () => {
  let component: AVendorEditprofileComponent;
  let fixture: ComponentFixture<AVendorEditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorEditprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorEditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
