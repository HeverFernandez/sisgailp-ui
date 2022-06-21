import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './escuela/crear/crear.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent
  },
  {
    path:'estudiantes',
    component: EstudianteComponent
  },
  {
    path:'escuela',
    component:EscuelaComponent
  },
  {
    path:'escuela/form',
    component: CrearComponent
  },
  {
    path:'escuela/form/:id',
    component: CrearComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
