import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionEncontreComponent } from './ubicacion-encontre.component';

describe('UbicacionEncontreComponent', () => {
  let component: UbicacionEncontreComponent;
  let fixture: ComponentFixture<UbicacionEncontreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UbicacionEncontreComponent]
    });
    fixture = TestBed.createComponent(UbicacionEncontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
