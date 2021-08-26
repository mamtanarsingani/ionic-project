import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'updateclasses/:cid',
    loadChildren: () => import('./updateclasses/updateclasses.module').then( m => m.UpdateclassesPageModule)
  },
  {
    path: 'studentlist/:cid',
    loadChildren: () => import('./studentlist/studentlist.module').then( m => m.StudentlistPageModule)
  },
  {
    path: 'addstudent',
    loadChildren: () => import('./addstudent/addstudent.module').then( m => m.AddstudentPageModule)
  },
  {
    path: 'updatestudent/:sid',
    loadChildren: () => import('./updatestudent/updatestudent.module').then( m => m.UpdatestudentPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
