import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLittleCardComponent } from './customer-little-card.component';

describe('CustomerLittleCardComponent', () => {
  let component: CustomerLittleCardComponent;
  let fixture: ComponentFixture<CustomerLittleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLittleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLittleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
