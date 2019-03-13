import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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
      correo: ['', [Validators .required]],
      contrasena: ['', [Validators.required]]
    });
  }

  async saveUser() {
    this.user = this.form.value;
    console.log(this.user);
    await this.modalCtrl.dismiss(this.user);
  }

}
