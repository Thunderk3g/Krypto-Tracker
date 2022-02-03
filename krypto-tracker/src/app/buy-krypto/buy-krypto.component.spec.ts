import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyKryptoComponent } from './buy-krypto.component';

describe('BuyKryptoComponent', () => {
  let component: BuyKryptoComponent;
  let fixture: ComponentFixture<BuyKryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyKryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyKryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
