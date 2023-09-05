import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from 'src/app/interfaces/carro';
import { CarroService } from 'src/app/services/carroservice/carro.service';

@Component({
  selector: 'app-updadecarros',
  templateUrl: './updadecarros.component.html',
  styleUrls: ['./updadecarros.component.css']
})
export class UpdadecarrosComponent implements OnInit{

  carro?: Carro
  data: any


  constructor(private carroservice: CarroService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.carroservice.getCarroById(id).subscribe(data => {
      this.carro = data
      console.log(this.carro)
    })
  }

  form = new FormGroup({
    placa: new FormControl('', [Validators.required]),
   renavam: new FormControl('', [Validators.required]),
    marca: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    anodefabricacao: new FormControl('', [Validators.required]),
    anodemodelo: new FormControl('', [Validators.required]),
    cor: new FormControl('', [Validators.required]),
    combustivel: new FormControl('', [Validators.required]),
    quilometragem: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    valordecompra: new FormControl('', [Validators.required]),
    anexodoc: new FormControl('', [Validators.required]),
    datadeentrada: new FormControl('', [Validators.required])
  })

  submit(){
    this.data = this.form.value
    console.log(this.data)
    
    this.carroservice.updateCarro(this.carro?.id, this.data).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/viewcadastrodecarros']);

    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

}

