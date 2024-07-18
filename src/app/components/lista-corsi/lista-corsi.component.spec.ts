import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCorsiComponent } from './lista-corsi.component';

describe('ListaCorsiComponent', () => {
  let component: ListaCorsiComponent;
  let fixture: ComponentFixture<ListaCorsiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCorsiComponent]
    });
    fixture = TestBed.createComponent(ListaCorsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
