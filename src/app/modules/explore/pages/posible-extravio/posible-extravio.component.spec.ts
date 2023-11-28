import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosibleExtravioComponent } from './posible-extravio.component';

describe('PosibleExtravioComponent', () => {
  let component: PosibleExtravioComponent;
  let fixture: ComponentFixture<PosibleExtravioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosibleExtravioComponent]
    });
    fixture = TestBed.createComponent(PosibleExtravioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
