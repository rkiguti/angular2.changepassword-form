import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordFormComponent } from './changepassword-form.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ChangePasswordFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }