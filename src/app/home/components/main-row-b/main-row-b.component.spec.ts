import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRowBComponent } from './main-row-b.component';

describe('MainRowBComponent', () => {
  let component: MainRowBComponent;
  let fixture: ComponentFixture<MainRowBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRowBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRowBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
