import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReponseReclamationComponent } from './add-reponse-reclamation.component';

describe('AddReponseReclamationComponent', () => {
  let component: AddReponseReclamationComponent;
  let fixture: ComponentFixture<AddReponseReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReponseReclamationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReponseReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
