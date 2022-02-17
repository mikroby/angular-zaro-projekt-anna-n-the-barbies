import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLittleCardComponent } from './product-little-card.component';

describe('ProductLittleCardComponent', () => {
  let component: ProductLittleCardComponent;
  let fixture: ComponentFixture<ProductLittleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLittleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLittleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
