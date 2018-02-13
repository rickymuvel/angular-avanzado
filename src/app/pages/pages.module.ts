import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Mis modulos
import { SharedModule } from '../shared/shared.module';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

// Mis rutas
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';



// Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartComponentComponent } from '../components/chart-component/chart-component.component';

@NgModule ({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        ChartComponentComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}
