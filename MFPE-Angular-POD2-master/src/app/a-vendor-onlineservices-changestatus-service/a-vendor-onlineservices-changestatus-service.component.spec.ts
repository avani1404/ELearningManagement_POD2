import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorOnlineservicesChangestatusServiceComponent } from './a-vendor-onlineservices-changestatus-service.component';

describe('AVendorOnlineservicesChangestatusServiceComponent', () => {
  let component: AVendorOnlineservicesChangestatusServiceComponent;
  let fixture: ComponentFixture<AVendorOnlineservicesChangestatusServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorOnlineservicesChangestatusServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorOnlineservicesChangestatusServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
