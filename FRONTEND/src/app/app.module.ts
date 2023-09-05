import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCarrosComponent } from './components/cadastrocarros/cadastrocarros.component';
import { CadastroClientesComponent } from './components/cadastroclientes/cadastroclientes.component';
import { CadastroVendasComponent } from './components/cadastrovendas/cadastrovendas.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { HomeComponent } from './components/home/home.component';
import { FinanciamentoComponent } from './components/financiamento/financiamento.component';
import { LoginComponent } from './components/login/login.component';
import { HomesisComponent } from './components/homesis/homesis.component';
import { ListaCarrosComponent } from './components/listacarros/listacarros.component';
import { ListaClientesComponent } from './components/viewcadastroclientes/listaclientes.component';
import { ListaVendasComponent } from './components/listavendas/listavendas.component'
import{HttpClientModule} from '@angular/common/http';
import { ViewcadastrocarrosComponent } from './components/viewcadastrocarros/viewcadastrocarros.component';
import { UpdadecarrosComponent } from './components/updatecarros/updadecarros.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateclientesComponent } from './components/updateclientes/updateclientes.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomerComponent } from './layout/homer/homer.component';





@NgModule({
  declarations: [
    AppComponent,
    CadastroCarrosComponent,
    CadastroClientesComponent,
    CadastroVendasComponent,
    EstoqueComponent,
    HomeComponent,
    FinanciamentoComponent,
    LoginComponent,
    HomesisComponent,
    ListaCarrosComponent,
    ListaClientesComponent,
    ListaVendasComponent,
    ViewcadastrocarrosComponent,
    UpdadecarrosComponent,
    UpdateclientesComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    HomerComponent,
  
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
