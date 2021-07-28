import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorOnlineServicesComponent } from './a-vendor-online-services.component';

describe('AVendorOnlineServicesComponent', () => {
  let component: AVendorOnlineServicesComponent;
  let fixture: ComponentFixture<AVendorOnlineServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorOnlineServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorOnlineServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
