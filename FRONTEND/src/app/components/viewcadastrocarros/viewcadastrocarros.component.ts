import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarroService } from 'src/app/services/carroservice/carro.service';

@Component({
  selector: 'app-viewcadastrocarros',
  templateUrl: './viewcadastrocarros.component.html',
  styleUrls: ['./viewcadastrocarros.component.css']
})
export class ViewcadastrocarrosComponent implements OnInit{

 carros: any[] |undefined
    
    

  url: string = "http://localhost:8080/";

  constructor(private carroservice: CarroService, private router: Router) { 
   
  }

  ngOnInit(): void {
    this.carroservice.getCarros().subscribe(data => {
      this.carros = data;
    })
  }



  deleteCarro(id: number){
    this.carroservice.deleteCarro(id).subscribe(data => {
      this.carros = this.carros?.filter(carro => carro.id !== id);
    })
    
      setTimeout(()=>{
        window.location.reload();
      }, 100);
  }



  updateCarro(id: number){
    this.router.navigate(['updatecarro', id]);
  }

}


