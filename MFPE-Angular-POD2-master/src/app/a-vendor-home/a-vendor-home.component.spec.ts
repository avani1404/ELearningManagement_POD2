import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AVendorHomeComponent } from './a-vendor-home.component';

describe('AVendorHomeComponent', () => {
  let component: AVendorHomeComponent;
  let fixture: ComponentFixture<AVendorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AVendorHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AVendorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
