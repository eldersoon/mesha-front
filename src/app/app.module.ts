import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { ListComponent } from './register/list/list.component';
import { CreateComponent } from './register/create/create.component';
import { ViewComponent } from './register/view/view.component';
import { HomeComponent } from './layout/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthenticationComponent,
    ListComponent,
    CreateComponent,
    ViewComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
