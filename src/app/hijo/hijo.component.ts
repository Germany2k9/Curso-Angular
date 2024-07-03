import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  // Este es el emensaje que recibe desde el padre 
   @Input() recibeHijo?: string;
}
