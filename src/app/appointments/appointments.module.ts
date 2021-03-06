import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentsPage } from './appointments.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AppointmentsPage }])
  ],
  declarations: [AppointmentsPage],
  entryComponents: [AppointmentsPage]
})
export class AppointmentsPageModule {}
