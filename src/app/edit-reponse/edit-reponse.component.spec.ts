import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReponseComponent } from './edit-reponse.component';

describe('EditReponseComponent', () => {
  let component: EditReponseComponent;
  let fixture: ComponentFixture<EditReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditReponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
