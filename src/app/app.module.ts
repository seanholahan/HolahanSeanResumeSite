import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppMaterialModule } from './app.material.module';
import { AppComponent, DialogContentComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { DataScienceComponent } from './data-science/data-science.component';
import { AnimationComponent } from './animation/animation.component';
import { HomeComponent } from './home/home.component';
import { JamseshComponent } from './jamsesh/jamsesh.component';
import {NavigationComponent} from './navigation/navigation.component';
import { SafeLinkPipe } from './util/safe-link.pipe';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dataScience', component: DataScienceComponent },
  { path: 'jamSesh', component: JamseshComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: HomeComponent }

  // ,
  //
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // ,
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false  } // <-- debugging purposes only
    )
  ],
  declarations: [AppComponent, DialogContentComponent, NavigationComponent, DataScienceComponent, AnimationComponent, HomeComponent, JamseshComponent, SafeLinkPipe],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
