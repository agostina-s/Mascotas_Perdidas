import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMascotaComponent } from './info-mascota.component';

describe('InfoMascotaComponent', () => {
  let component: InfoMascotaComponent;
  let fixture: ComponentFixture<InfoMascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoMascotaComponent]
    });
    fixture = TestBed.createComponent(InfoMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
