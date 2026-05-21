/** @autor milomnz */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoHeaderComponent } from './neo-header';

describe('NeoHeaderComponent', () => {
  let component: NeoHeaderComponent;
  let fixture: ComponentFixture<NeoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NeoHeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
