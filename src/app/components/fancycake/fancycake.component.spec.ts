import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancycakeComponent } from './fancycake.component';

describe('FancycakeComponent', () => {
  let component: FancycakeComponent;
  let fixture: ComponentFixture<FancycakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FancycakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FancycakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
