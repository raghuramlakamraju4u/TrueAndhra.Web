import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRowAComponent } from './main-row-a.component';

describe('MainRowAComponent', () => {
  let component: MainRowAComponent;
  let fixture: ComponentFixture<MainRowAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRowAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRowAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
