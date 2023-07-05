import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEncontreComponent } from './form-encontre.component';

describe('FormEncontreComponent', () => {
  let component: FormEncontreComponent;
  let fixture: ComponentFixture<FormEncontreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormEncontreComponent]
    });
    fixture = TestBed.createComponent(FormEncontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
