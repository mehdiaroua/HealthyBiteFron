import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnutritionComponent } from './addnutrition.component';

describe('AddnutritionComponent', () => {
  let component: AddnutritionComponent;
  let fixture: ComponentFixture<AddnutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnutritionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
