import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/clienteservice/cliente.service';

@Component({
  selector: 'app-cadastroclientes',
  templateUrl: './cadastroclientes.component.html',
  styleUrls: ['./cadastroclientes.component.css']
})
export class CadastroClientesComponent implements OnInit{

  constructor(private clienteservice: ClienteService, private router: Router) { }
  data: any
  
  form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
   cpf: new FormControl('', [Validators.required]),
    logradouro: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    complemento: new FormControl('', [Validators.required]),
    cidade: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    pais: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    anexodoc: new FormControl('', [Validators.required]),
  })
  ngOnInit(): void {
  }

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.clienteservice.addcliente(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/listaclientes']);

    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

}

