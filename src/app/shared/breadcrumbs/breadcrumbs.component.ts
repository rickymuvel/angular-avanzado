import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';
  constructor(
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
    this.getDataRoute()
        .subscribe( data => {
          this.label = data.titulo;
          this.title.setTitle(this.label);
          let metaTag: MetaDefinition = {
            name: 'description',
            content: this.label
          };
          this.meta.updateTag(metaTag);
        });
  }

  getDataRoute() {
    return this.router.events
      .retry(2)
      .filter( evento => evento instanceof ActivationEnd)
      .filter( ( evento: ActivationEnd) => evento.snapshot.firstChild === null )
      .map( ( evento: ActivationEnd) => evento.snapshot.data );
  }

  ngOnInit() {
  }

}
