import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepasRestaurantComponent } from './repas-restaurant.component';

describe('RepasRestaurantComponent', () => {
  let component: RepasRestaurantComponent;
  let fixture: ComponentFixture<RepasRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepasRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepasRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
