import { Component, OnInit } from '@angular/core';
import { ListaEstudiantes } from './estudiante.json';
import { EstudianteService } from './estudiante.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html'
})
export class EstudianteComponent implements OnInit {

  estudianteList: any;

  constructor(private estudianteService:EstudianteService) {
    //this.estudianteList = this.estudianteService.getEstudianteByEscuela();
    //this.estudianteList = ListaEstudiantes;
    //console.log(this.estudianteList);
  }

  ngOnInit(): void {
    this.listarEstudiantesByEscuela(3);
  }

  listarEstudiantesByEscuela(idescuela=3){
    //this.estudianteList.getEstudianteByEscuela(idescuela).subscribe((res:any) => { --- Aquí el error, debe ser como el de abajo
      this.estudianteService.getEstudianteByEscuela(idescuela).subscribe((res:any) => {
      this.estudianteList = res.data;
    })
  }
}
