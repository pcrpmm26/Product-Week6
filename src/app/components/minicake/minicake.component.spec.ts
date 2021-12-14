import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicakeComponent } from './minicake.component';

describe('MinicakeComponent', () => {
  let component: MinicakeComponent;
  let fixture: ComponentFixture<MinicakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinicakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinicakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
