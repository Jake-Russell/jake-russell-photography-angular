import { Routes } from '@angular/router';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
