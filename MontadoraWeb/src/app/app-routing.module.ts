import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCarroComponent } from './lista-carro/lista-carro.component';
import { CriarCarroComponent } from './criar-carro/criar-carro.component';

const routes: Routes = [
  { path: '', component: ListaCarroComponent },
  { path: 'cadastrar', component: CriarCarroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
