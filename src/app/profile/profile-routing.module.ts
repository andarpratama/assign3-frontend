import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerProfileComponent } from './container-profile/container-profile.component';

const routes: Routes = [
  {path: '', component: ContainerProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
