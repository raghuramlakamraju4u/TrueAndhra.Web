import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremAdsComponent } from './prem-ads.component';

describe('PremAdsComponent', () => {
  let component: PremAdsComponent;
  let fixture: ComponentFixture<PremAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
