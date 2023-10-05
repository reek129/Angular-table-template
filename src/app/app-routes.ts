import { RouterModule, Routes } from '@angular/router';

import { AngularFormComponent } from './angular-form/angular-form.component';
import { AngularListComponent } from './angular-list/angular-list.component';


const app_routes: Routes = [
    { path: 'list', component: AngularListComponent},
    { path: 'form', component: AngularFormComponent},
    { path: '**', pathMatch:'full', redirectTo: 'list'}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true, scrollPositionRestoration: 'enabled'});