import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    mostrar = true;
    frase: any = {
        mensaje: 'El gran mensaje',
        autor: 'Luis'
    };

    personajes: string[] = ['Luis', 'Sergio', 'Mariela'];
}