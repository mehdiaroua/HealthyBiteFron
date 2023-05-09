import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/Commande/addlivraison/addlivraison.component.spec.ts
import { AddlivraisonComponent } from './addlivraison.component';

describe('AddlivraisonComponent', () => {
  let component: AddlivraisonComponent;
  let fixture: ComponentFixture<AddlivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddlivraisonComponent);
========
import { AddproduitComponent } from './addproduit.component';

describe('AddproduitComponent', () => {
  let component: AddproduitComponent;
  let fixture: ComponentFixture<AddproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddproduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproduitComponent);
>>>>>>>> integration-azza/mahdi:src/app/ProduitRepas/addproduit/addproduit.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
