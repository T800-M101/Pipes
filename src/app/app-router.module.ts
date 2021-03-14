import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/////RUTAS////////
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';

const routes:Routes = [
  {
    path: '',
    component:BasicosComponent,
    pathMatch: 'full' //Cuando este el path vacio se mostrara este componente
  },
  {
    path: 'numeros',
    component:NumerosComponent
  },
  {
    path: 'no-comunes',
    component:NoComunesComponent,
  },
  {
    path: 'ordenar',
    component:OrdenarComponent,
  },
  {
    path: '\**', // Para redireccionar a la ruta vacia si en el URL hay alguna ruta desconocida
    redirectTo:'',
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRouterModule { }
