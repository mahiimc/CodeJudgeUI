import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    MatSelectModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
