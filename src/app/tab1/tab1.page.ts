import { BirthdayPage } from './../birthday/birthday.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppointmentsPage } from '../appointments/appointments.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController) {
  }

  async presentModalAppointments() {
    const modal = await this.modalController.create({
      component: AppointmentsPage
    });
    return await modal.present();
  }

  async presentModalBirthday() {
    const modal = await this.modalController.create({
      component: BirthdayPage
    });
    return await modal.present();
  }

}
