import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrepasComponent } from './addrepas.component';

describe('AddrepasComponent', () => {
  let component: AddrepasComponent;
  let fixture: ComponentFixture<AddrepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
