import { Component, OnInit, Input, Output ,EventEmitter, OnChanges} from '@angular/core';
import { Personas } from '../dto/personas';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit,OnChanges {
 @Input() recibirPadre:Personas;
 @Output() enviarMensaje = new EventEmitter<string>();
 usuarios:Array<Personas>=[];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.recibirPadre!=undefined){
      this.usuarios.push(this.recibirPadre);
    }
    
  }

  public enviar():void{
    this.enviarMensaje.emit("hola  soy tu hijo");
  }

  public mostrar():void{
this.usuarios.unshift(this.recibirPadre);
  }

  public eliminar(item:Personas):void{
    this.usuarios.splice(this.usuarios.indexOf(item),1);
  }
 
}
