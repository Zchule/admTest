import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FormUserPage } from '../form-user/form-user.page';
import { FormFolderPage } from '../form-folder/form-folder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'form-user',
        component: FormUserPage
      },
      {
        path: 'form-folder',
        component: FormFolderPage
      }
    ])
  ],
  declarations: [
    HomePage,
    FormUserPage,
    FormFolderPage
  ]
})
export class HomePageModule {}
