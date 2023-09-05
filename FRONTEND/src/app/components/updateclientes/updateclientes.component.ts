import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/clienteservice/cliente.service';

@Component({
  selector: 'app-updateclientes',
  templateUrl: './updateclientes.component.html',
  styleUrls: ['./updateclientes.component.css']
})
export class UpdateclientesComponent implements OnInit{

  cliente?: Cliente
  data: any


  constructor(private clienteservice: ClienteService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.clienteservice.getClienteById(id).subscribe(data => {
      this.cliente = data
      console.log(this.cliente)
    })
  }

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

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.clienteservice.updateCliente(this.cliente?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/listaclientes']);

    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

}

