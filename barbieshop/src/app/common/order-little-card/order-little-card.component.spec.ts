import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderLittleCardComponent } from './order-little-card.component';

describe('OrderLittleCardComponent', () => {
  let component: OrderLittleCardComponent;
  let fixture: ComponentFixture<OrderLittleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderLittleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLittleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
