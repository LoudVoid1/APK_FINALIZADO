import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LentesPage } from './lentes.page';

describe('LentesPage', () => {
  let component: LentesPage;
  let fixture: ComponentFixture<LentesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
