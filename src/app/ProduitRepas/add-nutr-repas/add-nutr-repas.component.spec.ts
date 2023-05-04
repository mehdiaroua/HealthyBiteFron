import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNutrRepasComponent } from './add-nutr-repas.component';

describe('AddNutrRepasComponent', () => {
  let component: AddNutrRepasComponent;
  let fixture: ComponentFixture<AddNutrRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNutrRepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNutrRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
