import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';

import { SignupPageComponent } from './components/pages/signup-page/signup-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './components/pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupPageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
