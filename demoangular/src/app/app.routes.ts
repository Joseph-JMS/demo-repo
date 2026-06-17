import { Routes } from '@angular/router';
import { FormPlantilla } from './form-plantilla/form-plantilla';
import { FormReactivo } from './form-reactivo/form-reactivo';

export const routes: Routes = [
    {
        path: 'form,-plantilla',
        component: FormPlantilla,
        title: 'Formulario Plantilla'
    },
    {
        path: 'form-reactivo',
        component: FormReactivo,
        title: 'Formulario Reactivo'
    }
];
