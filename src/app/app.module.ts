import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageCardComponent } from './home-page/home-page-card/home-page-card.component';
import { TextFormaingPipe } from './shared_pipes/text-formaing.pipe';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfolioCardComponent } from './portfolio/portfolio-card/portfolio-card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutCardComponent } from './about-us/about-card/about-card.component';
import { AboutBuildingComponent } from './about-building/about-building.component';
import { Nl2brPipe } from './shared_pipes/nl2br.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    HomePageCardComponent,
    TextFormaingPipe,
    PortfolioComponent,
    PortfolioCardComponent,
    AboutUsComponent,
    AboutCardComponent,
    AboutBuildingComponent,
    Nl2brPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
