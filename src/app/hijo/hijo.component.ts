import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { Personas } from '../dto/personas';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
 @Input() recibirPadre:string;
 @Output() enviarMensaje = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  public enviar():void{
    this.enviarMensaje.emit("hola  soy tu hijo");
  }
 
}
