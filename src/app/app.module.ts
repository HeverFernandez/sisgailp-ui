import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EstudianteService } from './estudiante/estudiante.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EstudianteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
