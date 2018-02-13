import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  // Con esto tenemos acceso a todo el DOM que vendría a ser lo mismo que hacer un document.getElementById.
  constructor( @Inject(DOCUMENT) private _document ) { }

  ngOnInit() {
  }

  cambiarColor( tema: string ) {
    let url  = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url );
  }

}
