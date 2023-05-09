import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConseilFromComponent } from './conseil-from.component';

describe('ConseilFromComponent', () => {
  let component: ConseilFromComponent;
  let fixture: ComponentFixture<ConseilFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConseilFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConseilFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
