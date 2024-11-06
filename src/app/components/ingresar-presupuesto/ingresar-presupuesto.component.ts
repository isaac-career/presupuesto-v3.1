import { Component } from '@angular/core';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrl: './ingresar-presupuesto.component.css'
})
export class IngresarPresupuestoComponent {

  cantidad: number;
  cantidadIncorrecta: boolean;

  constructor(){
    this.cantidad= 0;
    this.cantidadIncorrecta = false;
  }
  ngOnInit(): void{

  }

}
