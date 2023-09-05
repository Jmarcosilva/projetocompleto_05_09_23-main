import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesisComponent } from './homesis.component';

describe('HomesisComponent', () => {
  let component: HomesisComponent;
  let fixture: ComponentFixture<HomesisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomesisComponent]
    });
    fixture = TestBed.createComponent(HomesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
