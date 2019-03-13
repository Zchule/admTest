import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { FormUserPage } from '../form-user/form-user.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    public modalController: ModalController
  ) {
  }

  async addUser() {
    const modal = await this.modalController.create({
      component: FormUserPage
      });
    modal.present();
    modal.onDidDismiss().then((result: any) => {
      console.log( result.data);
   });
  }
}

