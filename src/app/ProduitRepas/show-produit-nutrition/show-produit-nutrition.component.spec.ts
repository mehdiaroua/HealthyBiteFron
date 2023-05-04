import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProduitNutritionComponent } from './show-produit-nutrition.component';

describe('ShowProduitNutritionComponent', () => {
  let component: ShowProduitNutritionComponent;
  let fixture: ComponentFixture<ShowProduitNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProduitNutritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowProduitNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
