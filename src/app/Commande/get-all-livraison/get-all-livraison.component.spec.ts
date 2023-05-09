import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLivraisonComponent } from './get-all-livraison.component';

describe('GetAllLivraisonComponent', () => {
  let component: GetAllLivraisonComponent;
  let fixture: ComponentFixture<GetAllLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
