import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdadecarrosComponent } from './updadecarros.component';

describe('UpdadecarrosComponent', () => {
  let component: UpdadecarrosComponent;
  let fixture: ComponentFixture<UpdadecarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdadecarrosComponent]
    });
    fixture = TestBed.createComponent(UpdadecarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
