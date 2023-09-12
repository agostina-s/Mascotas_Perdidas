import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEncontreComponent } from './info-encontre.component';

describe('InfoEncontreComponent', () => {
  let component: InfoEncontreComponent;
  let fixture: ComponentFixture<InfoEncontreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoEncontreComponent]
    });
    fixture = TestBed.createComponent(InfoEncontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
