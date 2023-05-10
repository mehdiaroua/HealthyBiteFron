import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaniierComponent } from './paniier.component';

describe('PaniierComponent', () => {
  let component: PaniierComponent;
  let fixture: ComponentFixture<PaniierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaniierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaniierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
