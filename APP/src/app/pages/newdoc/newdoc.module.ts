import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

import { IonicModule } from '@ionic/angular';

import { NewdocPage } from './newdoc.page';

const routes: Routes = [
  {
    path: '',
    component: NewdocPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewdocPage]
})
export class NewdocPageModule {}
