import { DetailsPage } from './details/details.page';
import { DetailsPageModule } from './details/appointments.module';
import { BirthdayPage } from './birthday/birthday.page';
import { BirthdayPageModule } from './birthday/birthday.module';
import { AppointmentsPage } from './appointments/appointments.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentsPageModule } from './appointments/appointments.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [AppointmentsPage, BirthdayPage, DetailsPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AppointmentsPageModule, BirthdayPageModule, DetailsPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
