import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {


  nombreLower: string = 'guillermo';
  nombreUpper: string = 'GUILLERMO';
  nombreCompleto: string = 'guIlLerMo mOrAn';


  fecha:Date = new Date(); // Esta es una propiedad de JavaScript (dia de hoy)


}
