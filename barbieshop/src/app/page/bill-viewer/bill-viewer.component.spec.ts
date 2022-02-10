import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillViewerComponent } from './bill-viewer.component';

describe('BillViewerComponent', () => {
  let component: BillViewerComponent;
  let fixture: ComponentFixture<BillViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
