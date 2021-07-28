import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOnlineservicesChangestatusServiceComponent } from './vendor-onlineservices-changestatus-service.component';

describe('VendorOnlineservicesChangestatusServiceComponent', () => {
  let component: VendorOnlineservicesChangestatusServiceComponent;
  let fixture: ComponentFixture<VendorOnlineservicesChangestatusServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorOnlineservicesChangestatusServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorOnlineservicesChangestatusServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
