import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import { CmpbComponent } from './cmpb.component';

const APP_ROUTES: Routes =  [
  { path: 'comp', component: CmpbComponent},
  { path: '', component: AppComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
