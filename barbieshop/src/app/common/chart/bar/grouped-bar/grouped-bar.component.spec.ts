import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedBarComponent } from './grouped-bar.component';

describe('GroupedBarComponent', () => {
  let component: GroupedBarComponent;
  let fixture: ComponentFixture<GroupedBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupedBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
