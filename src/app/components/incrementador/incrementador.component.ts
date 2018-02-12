import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input('nombre_progreso') progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log( 'Leyenda', this.leyenda );
    console.log( 'progreso', this.progreso );
  }

  ngOnInit() {
    console.log( 'Leyenda', this.leyenda );
    console.log( 'progreso', this.progreso );
  }

  cambiarValor( valor: number ) {

    this.progreso = this.progreso + valor;

    if ( this.progreso >= 100) {
      this.progreso = 100;
      return;
    }
    if ( this.progreso <= 0) {
      this.progreso = 0;
      return;
    }
    this.cambioValor.emit(this.progreso);

  }

}
