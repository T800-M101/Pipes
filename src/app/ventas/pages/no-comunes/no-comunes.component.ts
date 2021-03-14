import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
cambiando:boolean = true;
nombre:string = 'Guillermo';
genero:string ='masculino';

invitacionMapa = {
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}


//i18nPlural
clientes:string[] = ['Maria','Pedro','Hernando','Eduardo','Fernando'];

clientesMapa = {
  '=0': 'no tenemos ningun cliente esperando.',
  '=1':'tenemos un cliente esperando.',
  '=2':'tenemos 2 clientes esperando.',
  'other': 'tenemos # clientes esperando.'
}

cambiarCliente(){
  this.cambiando = !this.cambiando;
  if(!this.cambiando){
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }else {
    this.nombre = 'Guillermo';
    this.genero = 'masculino';
  }

}

borrarCliente(){
   this.clientes.pop();
}

//KeyValue Pipe
persona = {
  nombre: 'Guillermo',
  edad: 48,
  direccion: 'Mexico'
}


//Json Pipe

heroes = [
{
  nombre: 'Superman',
  vuela: true,

},
{
  nombre: 'Robin',
  vuela: false,

},
{
  nombre: 'Aquaman',
  vuela: false,

},
];

//Async Pipe
miObservable = interval(1000);
valorPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Tenemos data de la promesa!');
  },3500);
});

}
