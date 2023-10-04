import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmascotasComponent } from './cardmascotas.component';

describe('CardmascotasComponent', () => {
  let component: CardmascotasComponent;
  let fixture: ComponentFixture<CardmascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardmascotasComponent]
    });
    fixture = TestBed.createComponent(CardmascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
