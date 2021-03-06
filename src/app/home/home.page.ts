import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { FormUserPage } from '../form-user/form-user.page';
import { AuthorizacionService } from '../services/authorization.service';
import { FormFolderPage } from '../form-folder/form-folder.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loggedIn = false;
  email: any = null;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    public modalController: ModalController,
    public authorizationService: AuthorizacionService
  ) {
    this.authorizationService.isLogged()
    .subscribe((result) => {
      if (result && result.uid) {
        this.loggedIn = true;
        setTimeout(() => {
          this.email = authorizationService.getUser().currentUser.email;
        }, 500);
      } else {
        this.loggedIn = false;
      }
    }, (error) => {
      this.loggedIn = false;
    });
  }

  async addUser() {
    const modal = await this.modalController.create({
      component: FormUserPage
      });
    modal.present();
    modal.onDidDismiss().then((result: any) => {
      console.log(result.data);
   });
  }

  async addFolder() {
    const modal = await this.modalController.create({
      component: FormFolderPage
      });
    modal.present();
    modal.onDidDismiss().then((result: any) => {
      console.log(result.data);
   });
  }

}

