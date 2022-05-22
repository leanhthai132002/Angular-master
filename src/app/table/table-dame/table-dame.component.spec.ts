import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDameComponent } from './table-dame.component';

describe('TableDameComponent', () => {
  let component: TableDameComponent;
  let fixture: ComponentFixture<TableDameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
