import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DividerModule} from "primeng/divider";
import {ToastModule} from "primeng/toast";
import {HomeComponent} from "./home/home.component";
import {LoginGuard} from "./libs/login.guard";
import {LocalStorageService} from "./services/local-storage.service";
import {CardModule} from "primeng/card";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    PasswordModule,
    DividerModule,
    ToastModule,
    CardModule
  ],
  providers: [LoginGuard, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
