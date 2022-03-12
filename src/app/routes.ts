import { Routes } from '@angular/router';
import { AboutContentComponent } from './pages/about/about-content/about-content.component';
import { HomeContentComponent } from './pages/home/home-content/home-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactContentComponent } from './pages/contact/contact-content/contact-content.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: 'about', component: AboutContentComponent },
  { path: 'contact', component: ContactContentComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
