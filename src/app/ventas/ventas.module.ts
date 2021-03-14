import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
/////PAGINAS//////
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';



@NgModule({
  declarations: [NumerosComponent, NoComunesComponent, BasicosComponent, OrdenarComponent],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[NumerosComponent, NoComunesComponent, BasicosComponent, OrdenarComponent] //Porque se usran fuera del modulo de ventas que es donde estan registrados
})
export class VentasModule { }
