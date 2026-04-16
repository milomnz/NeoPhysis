/** @autor milomnz */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitForumComponent } from './submit-forum';

describe('SubmitForumComponent', () => {
  let component: SubmitForumComponent;
  let fixture: ComponentFixture<SubmitForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitForumComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitForumComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
