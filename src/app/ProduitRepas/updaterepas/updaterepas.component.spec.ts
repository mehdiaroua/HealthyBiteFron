import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterepasComponent } from './updaterepas.component';

describe('UpdaterepasComponent', () => {
  let component: UpdaterepasComponent;
  let fixture: ComponentFixture<UpdaterepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdaterepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
