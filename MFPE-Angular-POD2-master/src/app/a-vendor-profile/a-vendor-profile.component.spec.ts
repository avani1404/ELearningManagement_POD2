import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorProfileComponent } from './a-vendor-profile.component';

describe('AVendorProfileComponent', () => {
  let component: AVendorProfileComponent;
  let fixture: ComponentFixture<AVendorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
