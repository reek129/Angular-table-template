import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { app_routing } from './app-routes';
import { AppComponent } from './app.component';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { AngularListComponent } from './angular-list/angular-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularFormComponent,
    AngularListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
