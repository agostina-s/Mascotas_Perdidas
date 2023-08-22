import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomascotaComponent } from './infomascota.component';

describe('InfomascotaComponent', () => {
  let component: InfomascotaComponent;
  let fixture: ComponentFixture<InfomascotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfomascotaComponent]
    });
    fixture = TestBed.createComponent(InfomascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
