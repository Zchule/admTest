import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormUserPage } from './form-user.page';
import { AuthorizacionService } from '../services/authorization.service';

import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

const routes: Routes = [
  {
    path: '',
    component: FormUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [FormUserPage],
  // providers: [
  //   AuthorizacionService
  // ],
})
export class FormUserPageModule {}
