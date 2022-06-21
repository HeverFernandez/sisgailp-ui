import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Escuela } from '../Escuela';
import { EscuelaService } from '../escuela.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent implements OnInit {

  titulo: string="Registrar nueva escuela";
  escuela: Escuela = new Escuela();

  constructor(private escuelaService: EscuelaService,
    private router: Router,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  public crearEscuela(): void{
    this.escuelaService.registrarEscuela(this.escuela).subscribe(
      //response => this.router.navigate(['/escuela']) anterior
      escuela => {
        this.router.navigate(['/escuela'])
       Swal.fire("Enhorabuena",'Se ha registrado de manera satisfactoria',"success")
      }
    )
  }

}
