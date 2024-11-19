import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Horarios1Page } from './horarios1.page';

describe('Horarios1Page', () => {
  let component: Horarios1Page;
  let fixture: ComponentFixture<Horarios1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Horarios1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
