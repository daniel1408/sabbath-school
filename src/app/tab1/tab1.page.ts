import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { AppointmentsPage } from '../appointments/appointments.page';
import { BirthdayPage } from './../birthday/birthday.page';

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


  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/card-wireframe.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/card-wireframe.png",
    }
  ];

}
