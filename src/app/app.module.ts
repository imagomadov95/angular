import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { OnePageComponent } from './components/one-page/one-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, LoginPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
