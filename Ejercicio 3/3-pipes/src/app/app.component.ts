import { Component } from '@angular/core';
import { resolve } from 'path';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Luis';
  nombre2 = 'luis albErto melgArejo rios';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'luis',
    clave: 'bla',
    etc: 5
  };

  fecha = new Date();


  valorDePromesa = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('llego la data'), 3500 );
  });

  video = 'tgbNymZ7vqY';
}
