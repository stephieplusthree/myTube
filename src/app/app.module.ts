import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { VideoDetailComponent } from './main/video-detail/video-detail.component';
import { VideoListComponent } from './main/video-list/video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    VideoDetailComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
