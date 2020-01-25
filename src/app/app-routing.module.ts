import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManageItemComponent } from './item/manage-item/manage-item.component';

const routes: Routes = [
  { path: 'LoginScreen', component: LoginComponent },
  { path: 'DashbordScreen', component: DashbordComponent },
  { path: 'ManageItemScreen', component: ManageItemComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
