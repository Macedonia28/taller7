import { Component, OnInit } from '@angular/core';
import { Personas } from '../dto/personas';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  public enviarHijo:string;
  public recibirMensaje:string;
  personas:Personas=new Personas();

  constructor() { }

  ngOnInit(): void {
  }
 
  public recibir($event):void{
    this.recibirMensaje=$event;
  }

  public mostrarDatos():void{
   this.enviarHijo="soy tu padre";
   
}

public mostrar():void{
  this.personas.nombre;
}
}