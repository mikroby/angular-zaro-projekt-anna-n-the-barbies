import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLitleCardComponent } from './base-little-card.component';

describe('BaseLitleCardComponent', () => {
  let component: BaseLitleCardComponent;
  let fixture: ComponentFixture<BaseLitleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseLitleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
