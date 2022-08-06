import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CorouselComponent } from './corousel/corousel.component';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MovePageComponent } from './move-page/move-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CorouselComponent,
    CardComponent,
    FooterComponent,
    DetailCardComponent,
    MovePageComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    YouTubePlayerModule,
    

    
  ],
  entryComponents: [
    DetailCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
