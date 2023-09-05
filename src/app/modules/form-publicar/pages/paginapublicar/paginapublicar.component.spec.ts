import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginapublicarComponent } from './paginapublicar.component';

describe('PaginapublicarComponent', () => {
  let component: PaginapublicarComponent;
  let fixture: ComponentFixture<PaginapublicarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginapublicarComponent]
    });
    fixture = TestBed.createComponent(PaginapublicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
