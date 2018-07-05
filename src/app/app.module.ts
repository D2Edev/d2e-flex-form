import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexFormInputPlaceholderComponent } from './components/flex-form-input-placeholder/flex-form-input-placeholder.component';
import { FlexFormInputComponent } from './components/flex-form-input-placeholder/flex-form-input/flex-form-input.component';
import { FlexFormSelectComponent } from './components/flex-form-input-placeholder/flex-form-select/flex-form-select.component';
import { FlexFormTextareaComponent } from './components/flex-form-input-placeholder/flex-form-textarea/flex-form-textarea.component';
import { FlexFormComponent } from './components/flex-form.component';
import { FormInput } from './models/form-input';
import { FormInputOption } from './models/form-input-option';


@NgModule({
  declarations: [
    AppComponent,
    FlexFormInputComponent,
    FlexFormSelectComponent,
    FlexFormTextareaComponent,
    FlexFormComponent,
    FlexFormInputPlaceholderComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FlexFormInputComponent, FlexFormSelectComponent, FlexFormTextareaComponent],
  exports: [FlexFormComponent]
})
export class AppModule { }
