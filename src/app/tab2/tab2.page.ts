import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { DetailsPage } from './../details/details.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  items;

  constructor(
    public modalController: ModalController
  ) {
    this.initializeItems();
  }

  async presentModalDetails(name) {
    const modal = await this.modalController.create({
      component: DetailsPage,
      componentProps: {
        user: { name },
      }
    });
    return await modal.present();
  }


  initializeItems() {
    this.items = [
      "Beatriz da Silva",
      "João da Silva",
      "Samuel da Silva",
      "Isabela da Silva",
      "Miguel da Silva",
      "Sofia da Silva",
      "Hibrain da Silva",
      "Amanda da Silva",
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
