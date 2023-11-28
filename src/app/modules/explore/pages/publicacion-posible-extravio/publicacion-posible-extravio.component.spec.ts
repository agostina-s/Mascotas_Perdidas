import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionPosibleExtravioComponent } from './publicacion-posible-extravio.component';

describe('PublicacionPosibleExtravioComponent', () => {
  let component: PublicacionPosibleExtravioComponent;
  let fixture: ComponentFixture<PublicacionPosibleExtravioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicacionPosibleExtravioComponent]
    });
    fixture = TestBed.createComponent(PublicacionPosibleExtravioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
