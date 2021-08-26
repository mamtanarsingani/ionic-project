import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateclassesPage } from './updateclasses.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateclassesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateclassesPageRoutingModule {}
