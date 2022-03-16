import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';

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
import { PhotoListComponent } from './common/photo-list/photo-list.component';
import { PhotoThumbnailComponent } from './common/photo-list/photo-thumbnail/photo-thumbnail.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { ImageGalleryComponent } from './common/image-gallery/image-gallery.component';
import { ImageViewerComponent } from './common/image-viewer/image-viewer.component';
import { TopGalleryComponent } from './common/top-gallery/top-gallery.component';
import { ParisContentComponent } from './pages/gallery/travel/paris-content/paris-content.component';
import { BudapestContentComponent } from './pages/gallery/travel/budapest-content/budapest-content.component';
import { BratislavaContentComponent } from './pages/gallery/travel/bratislava-content/bratislava-content.component';
import { PragueContentComponent } from './pages/gallery/travel/prague-content/prague-content.component';
import { MunichContentComponent } from './pages/gallery/travel/munich-content/munich-content.component';

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
    PhotoListComponent,
    PhotoThumbnailComponent,
    CarouselComponent,
    ImageGalleryComponent,
    ImageViewerComponent,
    TopGalleryComponent,
    ParisContentComponent,
    BudapestContentComponent,
    BratislavaContentComponent,
    PragueContentComponent,
    MunichContentComponent,
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
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
