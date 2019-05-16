import 'hammerjs';
import {Component} from '@angular/core';
import {NgModule} from '@angular/core';
import { BrowserModule, Title} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app.material.module';
import { AppComponent, DialogContentComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';

import { SafeLinkPipe } from './util/safe-link.pipe';

import { FlexLayoutModule } from "@angular/flex-layout";
import {ContactService} from './contact/contact.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactConfirmationComponent } from './contact-confirmation/contact-confirmation.component';
import { ModalComponent } from './modal/modal.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {SharedService} from './services/shared.service';
import {PortfolioService} from './services/portfolio.service';
import { PdfViewerModule,PdfViewerComponent } from 'ng2-pdf-viewer';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import { ProfessionalLinksComponent } from './professional-links/professional-links.component';
import { AboutComponent } from './about/about.component';



const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent,
    data: {title:'hi'}
  },

  { path: 'navigation', component: NavigationComponent},
  { path: 'portfolio', component: PortfolioComponent,data: {animation: 'PortfolioPage'}},
  { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'}},
  { path: 'contactConfirm', component: ContactConfirmationComponent},
  { path: 'resume', component: ResumeComponent, data: {animation: 'ResumePage'}},
  {path: 'about', component: AboutComponent, data: {animation: 'AboutPage'}}
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: HomeComponent, data: {animation: 'HomePage'} }

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
    PdfViewerModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false  } // <-- debugging purposes only
    )
  ],
  providers: [Title, SharedService, PortfolioService, ContactService, {provide: LocationStrategy, useClass: HashLocationStrategy}],

  // SafeLinkPipe - declarations
  declarations: [AppComponent, DialogContentComponent, NavigationComponent,  HomeComponent,  PortfolioComponent, ContactComponent, ResumeComponent, ContactConfirmationComponent, ModalComponent, SafeLinkPipe, ProfessionalLinksComponent, AboutComponent],
  entryComponents: [DialogContentComponent, ModalComponent],
  exports: [ModalComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
