import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGeochartComponent } from './customer-geochart.component';

describe('CustomerGeochartComponent', () => {
  let component: CustomerGeochartComponent;
  let fixture: ComponentFixture<CustomerGeochartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerGeochartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGeochartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
