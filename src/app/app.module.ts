import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Primero los modulos default de Angular, luego los creados segun la necesidad alfabeticamente. No es mandatorio pero es buena practica.
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
//////COMPONENTES//////
import { AppComponent } from './app.component';

//Cambiar el local de la app (cambiar el idioma)
import localEs from '@angular/common/locales/es';
import localEsMx from '@angular/common/locales/es-MX';
import localFr from '@angular/common/locales/fr';
import {  registerLocaleData } from '@angular/common';
registerLocaleData(localEs);
registerLocaleData(localEsMx);
registerLocaleData(localFr);



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule


  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-MX' } //Para cambiar el idioma local de la aplicacion
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

