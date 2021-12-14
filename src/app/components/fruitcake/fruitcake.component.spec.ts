import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitcakeComponent } from './fruitcake.component';

describe('FruitcakeComponent', () => {
  let component: FruitcakeComponent;
  let fixture: ComponentFixture<FruitcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitcakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
