import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcollectionPointComponent } from './addcollection-point.component';

describe('AddcollectionPointComponent', () => {
  let component: AddcollectionPointComponent;
  let fixture: ComponentFixture<AddcollectionPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcollectionPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcollectionPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
