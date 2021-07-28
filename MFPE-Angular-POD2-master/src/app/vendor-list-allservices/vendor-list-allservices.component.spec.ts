import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorListAllservicesComponent } from './vendor-list-allservices.component';

describe('VendorListAllservicesComponent', () => {
  let component: VendorListAllservicesComponent;
  let fixture: ComponentFixture<VendorListAllservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorListAllservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorListAllservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
