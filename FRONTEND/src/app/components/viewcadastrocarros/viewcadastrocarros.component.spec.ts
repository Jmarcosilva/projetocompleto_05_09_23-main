import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcadastrocarrosComponent } from './viewcadastrocarros.component';

describe('ViewcadastrocarrosComponent', () => {
  let component: ViewcadastrocarrosComponent;
  let fixture: ComponentFixture<ViewcadastrocarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcadastrocarrosComponent]
    });
    fixture = TestBed.createComponent(ViewcadastrocarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
