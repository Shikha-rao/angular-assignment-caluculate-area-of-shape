import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertValuesComponent } from './insert-values.component';

describe('InsertValuesComponent', () => {
  let component: InsertValuesComponent;
  let fixture: ComponentFixture<InsertValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
