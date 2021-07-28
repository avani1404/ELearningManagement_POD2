import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorOrderhistoryComponent } from './vendor-orderhistory.component';

describe('VendorOrderhistoryComponent', () => {
  let component: VendorOrderhistoryComponent;
  let fixture: ComponentFixture<VendorOrderhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorOrderhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorOrderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
