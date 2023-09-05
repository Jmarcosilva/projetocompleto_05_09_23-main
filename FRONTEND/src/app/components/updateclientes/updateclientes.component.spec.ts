import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateclientesComponent } from './updateclientes.component';

describe('UpdateclientesComponent', () => {
  let component: UpdateclientesComponent;
  let fixture: ComponentFixture<UpdateclientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateclientesComponent]
    });
    fixture = TestBed.createComponent(UpdateclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
