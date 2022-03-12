import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroImageContainerComponent } from './pages/home/hero-image-container/hero-image-container.component';
import { HomeContentComponent } from './pages/home/home-content/home-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutContentComponent } from './pages/about/about-content/about-content.component';
import { ContactContentComponent } from './pages/contact/contact-content/contact-content.component';
import { PortraitContentComponent } from './pages/gallery/portraits/portrait-content/portrait-content.component';
import { LandscapeContentComponent } from './pages/gallery/landscapes/landscape-content/landscape-content.component';
import { TravelContentComponent } from './pages/gallery/travel/travel-content/travel-content.component';
import { StillLifeContentComponent } from './pages/gallery/still-life/still-life-content/still-life-content.component';
import { ArchitectureContentComponent } from './pages/gallery/architecture/architecture-content/architecture-content.component';
import { AutomotiveContentComponent } from './pages/gallery/automotive/automotive-content/automotive-content.component';
import { HomePhotosListComponent } from './pages/home/home-photos-list/home-photos-list.component';
import { HomePhotoThumbnailComponent } from './pages/home/home-photo-thumbnail/home-photo-thumbnail.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroImageContainerComponent,
    HomeContentComponent,
    PageNotFoundComponent,
    AboutContentComponent,
    ContactContentComponent,
    PortraitContentComponent,
    LandscapeContentComponent,
    TravelContentComponent,
    StillLifeContentComponent,
    ArchitectureContentComponent,
    AutomotiveContentComponent,
    HomePhotosListComponent,
    HomePhotoThumbnailComponent,
    CarouselComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    HttpClientModule,
    NgxGalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
