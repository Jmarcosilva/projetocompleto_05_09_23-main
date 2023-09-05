import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCarrosComponent } from './cadastrocarros.component';

describe('CadastroCarrosComponent', () => {
  let component: CadastroCarrosComponent;
  let fixture: ComponentFixture<CadastroCarrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroCarrosComponent]
    });
    fixture = TestBed.createComponent(CadastroCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
