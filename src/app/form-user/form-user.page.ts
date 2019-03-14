import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthorizacionService } from '../services/authorization.service';

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
    private authorizationService: AuthorizacionService
  ) { }

  ngOnInit() {
    this.form = this.buildForm();
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  private buildForm() {
    return this.formBuilder.group({
      nombre: ['', [Validators .required]],
      email: ['', [Validators .required]],
      password: ['', [Validators.required]]
    });
  }

  async saveUser() {
    this.user = this.form.value;
    console.log(this.user);
    this.authorizationService.registro(this.user.email, this.user.password);
    await this.modalCtrl.dismiss(this.user);
  }

}
