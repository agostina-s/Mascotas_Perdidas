import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoEncontreComponent } from './contacto-encontre.component';

describe('ContactoEncontreComponent', () => {
  let component: ContactoEncontreComponent;
  let fixture: ComponentFixture<ContactoEncontreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoEncontreComponent]
    });
    fixture = TestBed.createComponent(ContactoEncontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
