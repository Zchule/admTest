import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-folder',
  templateUrl: './form-folder.page.html',
  styleUrls: ['./form-folder.page.scss'],
})
export class FormFolderPage implements OnInit {

  folder: any = null;
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
      name: ['', [Validators .required]],
      description: ['', [Validators .required]]
    });
  }

  async saveUser() {
    this.folder = this.form.value;
    console.log(this.folder);
  }

}
