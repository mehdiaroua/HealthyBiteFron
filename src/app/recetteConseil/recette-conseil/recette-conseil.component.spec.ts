import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteConseilComponent } from './recette-conseil.component';

describe('RecetteConseilComponent', () => {
  let component: RecetteConseilComponent;
  let fixture: ComponentFixture<RecetteConseilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecetteConseilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetteConseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
