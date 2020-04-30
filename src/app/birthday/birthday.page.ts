import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birthday',
  templateUrl: 'birthday.page.html',
  styleUrls: ['birthday.page.scss']
})
export class BirthdayPage {

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
