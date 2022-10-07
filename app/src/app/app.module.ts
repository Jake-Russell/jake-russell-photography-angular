import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
import { CologneContentComponent } from './pages/gallery/travel/cologne-content/cologne-content.component';
import { BrusselsContentComponent } from './pages/gallery/travel/brussels-content/brussels-content.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SalonPrive2021ContentComponent } from './pages/gallery/automotive/salon-prive2021-content/salon-prive2021-content.component';
import { FerrariRacingDays2021ContentComponent } from './pages/gallery/automotive/ferrari-racing-days2021-content/ferrari-racing-days2021-content.component';
import { PhotoThumbnailTextComponent } from './common/photo-list/photo-thumbnail/photo-thumbnail-text/photo-thumbnail-text.component';
import { AlbufeiraContentComponent } from './pages/gallery/travel/albufeira-content/albufeira-content.component';
import { LondonContentComponent } from './pages/gallery/travel/london-content/london-content.component';
import { SubGalleryHeadingComponent } from './sub-gallery-heading/sub-gallery-heading.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';


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
    CologneContentComponent,
    BrusselsContentComponent,
    ContactFormComponent,
    SalonPrive2021ContentComponent,
    FerrariRacingDays2021ContentComponent,
    PhotoThumbnailTextComponent,
    AlbufeiraContentComponent,
    SubGalleryHeadingComponent,
    LondonContentComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
