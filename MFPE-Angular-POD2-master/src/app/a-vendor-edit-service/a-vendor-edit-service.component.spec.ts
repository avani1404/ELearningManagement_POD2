import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorEditServiceComponent } from './a-vendor-edit-service.component';

describe('AVendorEditServiceComponent', () => {
  let component: AVendorEditServiceComponent;
  let fixture: ComponentFixture<AVendorEditServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorEditServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorEditServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
