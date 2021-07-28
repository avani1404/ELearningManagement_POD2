import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOnlineservicesComponent } from './vendor-onlineservices.component';

describe('VendorOnlineservicesComponent', () => {
  let component: VendorOnlineservicesComponent;
  let fixture: ComponentFixture<VendorOnlineservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorOnlineservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorOnlineservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
