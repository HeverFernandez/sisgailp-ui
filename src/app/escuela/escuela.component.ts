import { Component, OnInit } from '@angular/core';
import { Escuela } from './Escuela';
import { EscuelaService } from './escuela.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-escuela',
  templateUrl: './escuela.component.html'
})
export class EscuelaComponent implements OnInit {

  listaEscuelas: any;

  constructor(private escuelaService: EscuelaService) { }

  ngOnInit(): void {
    this.listarEscuelas();
  }

  listarEscuelas(){
    this.escuelaService.listarEscuelas().subscribe((res:any) => {
      this.listaEscuelas = res.data;
    }
    )
  }

}
