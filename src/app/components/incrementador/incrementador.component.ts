import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input('nombre_progreso') progreso: number = 50;

  // Ojo que hemos puesto un parámetro al input como un "alias" que será usado en el componente que use este otro componente. Para este caso
  // El componente progress.component.html

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

  }

}
