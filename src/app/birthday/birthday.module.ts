import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BirthdayPage } from './birthday.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: BirthdayPage }])
  ],
  declarations: [BirthdayPage],
  entryComponents: [BirthdayPage]
})
export class BirthdayPageModule {}
