import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPublicarComponent } from './form-publicar.component';

describe('FormPublicarComponent', () => {
  let component: FormPublicarComponent;
  let fixture: ComponentFixture<FormPublicarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPublicarComponent]
    });
    fixture = TestBed.createComponent(FormPublicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
