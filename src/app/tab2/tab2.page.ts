import { DetailsPage } from './../details/details.page';
import { ModalController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public modalController: ModalController
  ) {}

  async presentModalDetails(name) {
    const modal = await this.modalController.create({
      component: DetailsPage,
      componentProps: {
        user: { name },
      }
    });
    return await modal.present();
  }

}
