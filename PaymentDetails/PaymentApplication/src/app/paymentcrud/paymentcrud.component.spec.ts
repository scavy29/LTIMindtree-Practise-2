import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentcrudComponent } from './paymentcrud.component';

describe('PaymentcrudComponent', () => {
  let component: PaymentcrudComponent;
  let fixture: ComponentFixture<PaymentcrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentcrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
