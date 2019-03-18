import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/users.service';
import { map } from 'rxjs/operators';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  users: any = [];
  constructor(
    private userService: UserService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {
  }
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
    .pipe(
      map(changes =>
        changes.map((item: any) =>
        ({ key: item.payload.key,
          ...item.payload.val() }))
      )
    )
    .subscribe((users) => {
      this.users = users;
      console.log(this.users);
      }
    );
  }

  async removeUser(user) {
    const confirm = await this.alertCtrl.create({
      header: 'Eliminar lugar',
      subHeader: 'Subtitle',
      message: '¿Estás seguro de eliminar este lugar?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelar clicked');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            console.log('Eliminar clicked');
            this.userService.deleteUser(user)
            .then(() => {
              this.presentLoading();
            });
          }
        }
      ]
    });
    confirm.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 2000
    });
    await loading.present();
  }
  // await loading.onDidDismiss();
}
