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
import { ParisContentComponent } from './pages/gallery/travel/paris-content/paris-content.component';
import { BudapestContentComponent } from './pages/gallery/travel/budapest-content/budapest-content.component';
import { BratislavaContentComponent } from './pages/gallery/travel/bratislava-content/bratislava-content.component';
import { PragueContentComponent } from './pages/gallery/travel/prague-content/prague-content.component';
import { MunichContentComponent } from './pages/gallery/travel/munich-content/munich-content.component';
import { CologneContentComponent } from './pages/gallery/travel/cologne-content/cologne-content.component';
import { BrusselsContentComponent } from './pages/gallery/travel/brussels-content/brussels-content.component';
import { SalonPrive2021ContentComponent } from './pages/gallery/automotive/salon-prive2021-content/salon-prive2021-content.component';
import { FerrariRacingDays2021ContentComponent } from './pages/gallery/automotive/ferrari-racing-days2021-content/ferrari-racing-days2021-content.component';
import { AlbufeiraContentComponent } from './pages/gallery/travel/albufeira-content/albufeira-content.component';
import { LondonContentComponent } from './pages/gallery/travel/london-content/london-content.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeContentComponent },
  { path: 'about', component: AboutContentComponent },
  { path: 'contact', component: ContactContentComponent },
  { path: 'gallery/architecture', component: ArchitectureContentComponent },
  { path: 'gallery/automotive', component: AutomotiveContentComponent },
  {
    path: 'gallery/automotive/salon_prive_2021',
    component: SalonPrive2021ContentComponent,
  },
  {
    path: 'gallery/automotive/ferrari_racing_days_2021',
    component: FerrariRacingDays2021ContentComponent,
  },
  { path: 'gallery/landscape', component: LandscapeContentComponent },
  { path: 'gallery/portrait', component: PortraitContentComponent },
  { path: 'gallery/still_life', component: StillLifeContentComponent },
  { path: 'gallery/travel', component: TravelContentComponent },
  { path: 'gallery/travel/budapest', component: BudapestContentComponent },
  { path: 'gallery/travel/bratislava', component: BratislavaContentComponent },
  { path: 'gallery/travel/prague', component: PragueContentComponent },
  { path: 'gallery/travel/munich', component: MunichContentComponent },
  { path: 'gallery/travel/cologne', component: CologneContentComponent },
  { path: 'gallery/travel/brussels', component: BrusselsContentComponent },
  { path: 'gallery/travel/paris', component: ParisContentComponent },
  { path: 'gallery/travel/albufeira', component: AlbufeiraContentComponent },
  { path: 'gallery/travel/london', component: LondonContentComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];
