import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSucesfullComponent } from './purchase-sucesfull.component';

describe('PurchaseSucesfullComponent', () => {
  let component: PurchaseSucesfullComponent;
  let fixture: ComponentFixture<PurchaseSucesfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseSucesfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseSucesfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
