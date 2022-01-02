import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginMangerComponent } from './login-manger/login-manger.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { MobilePipe } from './Pipes/mobile.pipe';
import { AddEmpComponent } from './Dialogs/add-emp/add-emp.component';
import { EditEmpComponent } from './Dialogs/edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './Dialogs/delete-emp/delete-emp.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginMangerComponent,
    HomeComponent,
    MainComponent,
    MobilePipe,
    AddEmpComponent,
    EditEmpComponent,
    DeleteEmpComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
