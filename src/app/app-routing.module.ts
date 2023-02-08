import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './modules/core/components/address/address.component';
import { BusinessDetailsComponent } from './modules/core/components/business-details/business-details.component';
import { ContactComponent } from './modules/core/components/contact/contact.component';
import { HomeComponent } from './modules/core/components/home/home.component';
import { ImagesComponent } from './modules/core/components/images/images.component';
import { VideosComponent } from './modules/core/components/videos/videos.component';
import { WorkComponent } from './modules/core/components/work/work.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'businessDetails', component: BusinessDetailsComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'video', component: VideosComponent },
  { path: 'image', component: ImagesComponent },
  { path: 'address', component: AddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
