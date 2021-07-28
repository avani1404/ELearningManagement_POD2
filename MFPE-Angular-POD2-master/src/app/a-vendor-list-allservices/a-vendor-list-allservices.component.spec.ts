import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorListAllservicesComponent } from './a-vendor-list-allservices.component';

describe('AVendorListAllservicesComponent', () => {
  let component: AVendorListAllservicesComponent;
  let fixture: ComponentFixture<AVendorListAllservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorListAllservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorListAllservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
