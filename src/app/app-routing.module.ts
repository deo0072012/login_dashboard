import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './adminpanel/auth/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import{content} from './shared/routes/content-routes'


const routes: Routes = [
  {
    path:'',
    redirectTo:'auth/login',
    pathMatch:'full'
  },
  {
    path:'',
    component:LayoutComponent,
    children:content
  },
  {
    path:'auth/login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
