import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { OnePageComponent } from './components/one-page/one-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'one', component: OnePageComponent },
  { path: 'second', component: SecondPageComponent, canActivate: [AuthGuard] },
  {
    path: 'owner',
    loadChildren: () =>
      import('./owner/owner.module').then((m) => m.OwnerModule),
  },
  { path: 'sing', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
