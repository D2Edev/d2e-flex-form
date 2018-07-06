import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormInput } from './modules/flex-form/models/form-input';
import { FormInputOption } from './modules/flex-form/models/form-input-option';
import { FlexFormModule } from './modules/flex-form/flex-form.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule, FlexFormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
