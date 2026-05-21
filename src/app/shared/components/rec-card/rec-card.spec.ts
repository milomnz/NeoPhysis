import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecCard } from './rec-card';

describe('RecCard', () => {
  let component: RecCard;
  let fixture: ComponentFixture<RecCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RecCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
