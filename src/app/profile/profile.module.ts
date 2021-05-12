import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ContainerProfileComponent } from './container-profile/container-profile.component';
import { SharedModule } from '../shared/shared.module';
import { ContentProfileComponent } from './content-profile/content-profile.component';
import { FormProfileComponent } from './form-profile/form-profile.component';


@NgModule({
  declarations: [
    ContainerProfileComponent,
    ContentProfileComponent,
    FormProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
