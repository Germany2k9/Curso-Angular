import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

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
