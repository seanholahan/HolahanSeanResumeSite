import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule, Title} from '@angular/platform-browser';
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
import { WebDevComponent } from './webDev/webDev.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {SharedService} from './shared.service';
import {ContactService} from './contact/contact.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactConfirmationComponent } from './contact-confirmation/contact-confirmation.component'
//import { MaterialModule } from '@angular/material';




const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent,
    data: {title:'hi'}
  },
  { path: 'dataScience', component: DataScienceComponent },
  { path: 'jamSesh', component: JamseshComponent },
  { path: 'animation', component: AnimationComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'webDev', component: WebDevComponent },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'contactConfirm', component: ContactConfirmationComponent},
  { path: 'resume', component: ResumeComponent},
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
    FlexLayoutModule,
    HttpClientModule,
    // MaterialModule,

    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false  } // <-- debugging purposes only
    )
  ],
  providers: [Title, SharedService, ContactService],
  declarations: [AppComponent, DialogContentComponent, NavigationComponent, DataScienceComponent, AnimationComponent, HomeComponent, JamseshComponent, SafeLinkPipe, WebDevComponent, PortfolioComponent, ContactComponent, ResumeComponent, ContactConfirmationComponent],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
