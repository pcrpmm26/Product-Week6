import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalcakeComponent } from './normalcake.component';

describe('NormalcakeComponent', () => {
  let component: NormalcakeComponent;
  let fixture: ComponentFixture<NormalcakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalcakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
