import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorOnlineservicesChangestatusComponent } from './a-vendor-onlineservices-changestatus.component';

describe('AVendorOnlineservicesChangestatusComponent', () => {
  let component: AVendorOnlineservicesChangestatusComponent;
  let fixture: ComponentFixture<AVendorOnlineservicesChangestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorOnlineservicesChangestatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorOnlineservicesChangestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
