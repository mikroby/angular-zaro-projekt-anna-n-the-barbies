import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillLittleCardComponent } from './bill-little-card.component';

describe('BillLittleCardComponent', () => {
  let component: BillLittleCardComponent;
  let fixture: ComponentFixture<BillLittleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillLittleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillLittleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
