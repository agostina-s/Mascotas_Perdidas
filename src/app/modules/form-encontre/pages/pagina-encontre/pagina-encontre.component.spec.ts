import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEncontreComponent } from './pagina-encontre.component';

describe('PaginaEncontreComponent', () => {
  let component: PaginaEncontreComponent;
  let fixture: ComponentFixture<PaginaEncontreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaEncontreComponent]
    });
    fixture = TestBed.createComponent(PaginaEncontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
