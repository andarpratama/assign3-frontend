import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerDetailComponent } from './container-detail/container-detail.component';

const routes: Routes = [
  {path: '', component: ContainerDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule { }
