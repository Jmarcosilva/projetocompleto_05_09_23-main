import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroClientesComponent } from './cadastroclientes.component';

describe('CadastroClientesComponent', () => {
  let component: CadastroClientesComponent;
  let fixture: ComponentFixture<CadastroClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroClientesComponent]
    });
    fixture = TestBed.createComponent(CadastroClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
