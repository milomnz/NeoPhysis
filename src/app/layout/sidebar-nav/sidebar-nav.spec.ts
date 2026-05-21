/** @autor milomnz */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SidebarNavComponent } from './sidebar-nav';

describe('SidebarNavComponent', () => {
  let component: SidebarNavComponent;
  let fixture: ComponentFixture<SidebarNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarNavComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarNavComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
