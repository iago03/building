import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutBuildingComponent } from './about-building/about-building.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"about-building/:id",component:AboutBuildingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
