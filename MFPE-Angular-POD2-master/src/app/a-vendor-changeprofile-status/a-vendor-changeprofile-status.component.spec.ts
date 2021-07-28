import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorChangeprofileStatusComponent } from './a-vendor-changeprofile-status.component';

describe('AVendorChangeprofileStatusComponent', () => {
  let component: AVendorChangeprofileStatusComponent;
  let fixture: ComponentFixture<AVendorChangeprofileStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorChangeprofileStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorChangeprofileStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
