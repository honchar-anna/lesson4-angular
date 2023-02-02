import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SortLastNamePipe } from './sort-last-name.pipe';
import { SortFirstNamePipe } from './sort-first-name.pipe';
import { SortPhoneNumberPipe } from './sort-phone-number.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,

    SortLastNamePipe,
    SortFirstNamePipe,
    SortPhoneNumberPipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
