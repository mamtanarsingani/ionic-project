import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateclassesPageRoutingModule } from './updateclasses-routing.module';

import { UpdateclassesPage } from './updateclasses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateclassesPageRoutingModule
  ],
  declarations: [UpdateclassesPage]
})
export class UpdateclassesPageModule {}
