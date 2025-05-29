import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientComponent } from '../components/client/client.component';
import { AdministratorComponent } from '../components/administrator/administrator.component';

export const routes: Routes = [
   // { path: '', component: AppComponent },
   { path: 'client', component: ClientComponent },
   { path: 'administrator', component: AdministratorComponent }
];
