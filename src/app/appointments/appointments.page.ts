import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointments',
  templateUrl: 'appointments.page.html',
  styleUrls: ['appointments.page.scss']
})
export class AppointmentsPage {

  constructor(
    private router: Router,
    public modalCtrl: ModalController,
  ) {}

  navigate() {
    this.router.navigate(['/log/tabs/tab1']);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
