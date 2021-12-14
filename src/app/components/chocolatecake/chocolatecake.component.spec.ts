import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolatecakeComponent } from './chocolatecake.component';

describe('ChocolatecakeComponent', () => {
  let component: ChocolatecakeComponent;
  let fixture: ComponentFixture<ChocolatecakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChocolatecakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolatecakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
