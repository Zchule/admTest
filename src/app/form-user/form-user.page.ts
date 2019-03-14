import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthorizacionService } from '../services/authorization.service';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.page.html',
  styleUrls: ['./form-user.page.scss'],
})
export class FormUserPage implements OnInit {

  user: any = null;
  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private authorizationService: AuthorizacionService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.form = this.buildForm();
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  private buildForm() {
    return this.formBuilder.group({
      name: ['', [Validators .required]],
      email: ['', [Validators .required]],
      password: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      typeUser: ['', [Validators.required]]
    });
  }

  async saveUser() {
    this.user = this.form.value;
    console.log(this.user);
    this.userService.createUser(this.user.email, this.user.password, this.user.name, this.user.cedula, this.user.typeUser);
    await this.modalCtrl.dismiss(this.user);
  }

}
