import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{
  
  nombre?: string;
  fecha?: Date= new Date()
  pi?: number = Math.PI;

  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ) { }

   

  ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan');
    this.nombre = this._servicioFamiliar.getHermanoGrande();

      
  }

    saludar(){
      this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '');
    }


    preguntar(){
      console.log(this._servicioFamiliar.preguntarPorHijo());
    }

 valorContador: number = 0;
//  mensajePadre= "Ojala Messi llegue al proximo mundial."; 

  mensajeRecibido: string= '';

  recibirMensaje($event: string){

    this.mensajeRecibido = $event;
  }

 incrementar(){
  this.valorContador++;
 }
 
 decrementar(){
  this.valorContador--;
 }
 
}
