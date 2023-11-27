import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmascotaComponent } from './editarmascota.component';

describe('EditarmascotaComponent', () => {
  let component: EditarmascotaComponent;
  let fixture: ComponentFixture<EditarmascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarmascotaComponent]
    });
    fixture = TestBed.createComponent(EditarmascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
