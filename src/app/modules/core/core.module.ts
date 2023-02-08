import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { BusinessDetailsComponent } from './components/business-details/business-details.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { VideosComponent } from './components/videos/videos.component';
import { ImagesComponent } from './components/images/images.component';
import { AddressComponent } from './components/address/address.component';


@NgModule({
  declarations: [
    HomeComponent,
    BusinessDetailsComponent,
    WorkComponent,
    ContactComponent,
    VideosComponent,
    ImagesComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule,
    FontAwesomeModule
  ]
})
export class CoreModule { }
