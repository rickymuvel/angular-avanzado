import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarTres()
    .then((state) => {
      console.log('Terminó', state);
    })
    .catch((error) => {
      console.error('Hemos experimentado el siguiente error:', error );
    });
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador += 1;
        if ( contador === 3 ) {
          resolve(true);
          clearInterval(intervalo);
        }
        console.log(contador);
      }, 1000 );
    });
  }

}
