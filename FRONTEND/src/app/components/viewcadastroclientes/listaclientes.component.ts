import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/clienteservice/cliente.service';

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.css']
})
export class ListaClientesComponent implements OnInit{

  clientes: any[] |undefined
    
    

  url: string = "http://localhost:8080/";

  constructor(private clienteservice: ClienteService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.clienteservice.getCliente().subscribe(data => {
      this.clientes = data;
    })
  }



  deleteCliente(id: number){
    this.clienteservice.deleteCliente(id).subscribe(data => {
      this.clientes = this.clientes?.filter(cliente => cliente.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  }



  updateCliente(id: number){
    this.router.navigate(['update', id]);
  }

}
