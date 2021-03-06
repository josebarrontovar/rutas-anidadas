import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioAgregarComponent } from './usuario-agregar/usuario-agregar.component';
import { UsuarioModificarComponent } from './usuario-modificar/usuario-modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    UsuariosComponent,
    UsuarioAgregarComponent,
    UsuarioModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
