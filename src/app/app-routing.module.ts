import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailpageComponent } from './detailpage/detailpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detail', component: DetailpageComponent },
  { path: '**', component: PageNotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
