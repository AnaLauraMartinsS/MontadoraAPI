import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCarroComponent } from './lista-carro/lista-carro.component';
import { CarregandoComponent } from './carregando/carregando.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CriarCarroComponent } from './criar-carro/criar-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCarroComponent,
    CarregandoComponent,
    CriarCarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
