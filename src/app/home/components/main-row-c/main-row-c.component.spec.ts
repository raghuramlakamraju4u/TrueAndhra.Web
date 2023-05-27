import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRowCComponent } from './main-row-c.component';

describe('MainRowCComponent', () => {
  let component: MainRowCComponent;
  let fixture: ComponentFixture<MainRowCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRowCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRowCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
