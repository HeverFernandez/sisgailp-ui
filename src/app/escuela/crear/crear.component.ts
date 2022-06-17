import { Component, OnInit } from '@angular/core';
import { Escuela } from '../Escuela';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent implements OnInit {

  titulo: string="Registrar nueva escuela";
  escuela: Escuela = new Escuela();

  constructor() { }

  ngOnInit(): void {
  }

  public crearEscuela(): void{
    console.log("cliked");
    console.log(this.escuela);
  }

}
