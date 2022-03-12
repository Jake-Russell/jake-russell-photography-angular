import { Routes } from '@angular/router';
import { AboutContentComponent } from './pages/about/about-content/about-content.component';
import { HomeContentComponent } from './pages/home/home-content/home-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactContentComponent } from './pages/contact/contact-content/contact-content.component';
import { ArchitectureContentComponent } from './pages/gallery/architecture/architecture-content/architecture-content.component';
import { AutomotiveContentComponent } from './pages/gallery/automotive/automotive-content/automotive-content.component';
import { LandscapeContentComponent } from './pages/gallery/landscapes/landscape-content/landscape-content.component';
import { PortraitContentComponent } from './pages/gallery/portraits/portrait-content/portrait-content.component';
import { StillLifeContentComponent } from './pages/gallery/still-life/still-life-content/still-life-content.component';
import { TravelContentComponent } from './pages/gallery/travel/travel-content/travel-content.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: 'about', component: AboutContentComponent },
  { path: 'contact', component: ContactContentComponent },
  { path: 'gallery/architecture', component: ArchitectureContentComponent },
  { path: 'gallery/automotive', component: AutomotiveContentComponent },
  { path: 'gallery/landscape', component: LandscapeContentComponent },
  { path: 'gallery/portrait', component: PortraitContentComponent },
  { path: 'gallery/still_life', component: StillLifeContentComponent },
  { path: 'gallery/travel', component: TravelContentComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
