import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOnlineservicesChangestatusComponent } from './vendor-onlineservices-changestatus.component';

describe('VendorOnlineservicesChangestatusComponent', () => {
  let component: VendorOnlineservicesChangestatusComponent;
  let fixture: ComponentFixture<VendorOnlineservicesChangestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorOnlineservicesChangestatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorOnlineservicesChangestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
