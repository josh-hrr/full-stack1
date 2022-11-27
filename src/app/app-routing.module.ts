import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { DirectivasComponent } from './directivas/directivas.component';

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'directivas', component: DirectivasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
