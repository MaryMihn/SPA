import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSeachComponent } from './input-seach.component';

describe('InputSeachComponent', () => {
  let component: InputSeachComponent;
  let fixture: ComponentFixture<InputSeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
