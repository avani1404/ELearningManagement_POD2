import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorAddServiceComponent } from './a-vendor-add-service.component';

describe('AVendorAddServiceComponent', () => {
  let component: AVendorAddServiceComponent;
  let fixture: ComponentFixture<AVendorAddServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorAddServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorAddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
