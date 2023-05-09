import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitShopComponent } from './produit-shop.component';

describe('ProduitShopComponent', () => {
  let component: ProduitShopComponent;
  let fixture: ComponentFixture<ProduitShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
