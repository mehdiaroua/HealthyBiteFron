import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilDetailComponent } from './conseil-detail.component';

describe('ConseilDetailComponent', () => {
  let component: ConseilDetailComponent;
  let fixture: ComponentFixture<ConseilDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseilDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConseilDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
