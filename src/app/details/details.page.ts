import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss']
})
export class DetailsPage {

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
