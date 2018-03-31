import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;
  constructor() {

    this. subscripcion = this.retornaObservable()
      .subscribe(
      num => console.log('subs', num ),
      error => console.error('Error', error),
      () => console.log('El observador terminó')
    );
  }

  retornaObservable(): Observable<any> {
    return new Observable( observer => {
      let contador = 1;

      let interval = setInterval( () => {

        let salida = {
          valor: contador
        };

        contador += 1;
        observer.next( salida );

        if ( contador === 3 ) {
          clearInterval( interval );
          observer.complete();
        }
      }, 1000);
    })
    .retry(2)
    .map( ( resp: any ) => {
      return resp.valor;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy () {
    this.subscripcion.unsubscribe();
  }

}
