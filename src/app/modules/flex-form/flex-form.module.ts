import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexFormInputComponent } from './components/flex-form-input-placeholder/flex-form-input/flex-form-input.component';
import { FlexFormSelectComponent } from './components/flex-form-input-placeholder/flex-form-select/flex-form-select.component';
import { FlexFormTextareaComponent } from './components/flex-form-input-placeholder/flex-form-textarea/flex-form-textarea.component';
import { FlexFormComponent } from './components/flex-form.component';
import { FlexFormInputPlaceholderComponent } from './components/flex-form-input-placeholder/flex-form-input-placeholder.component';
import { FlexFormCheckboxComponent } from './components/flex-form-input-placeholder/flex-form-checkbox/flex-form-checkbox.component';

@NgModule({
  declarations: [
    FlexFormComponent,
    FlexFormInputPlaceholderComponent,
    FlexFormInputComponent,
    FlexFormSelectComponent,
    FlexFormTextareaComponent,
    FlexFormCheckboxComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  entryComponents: [FlexFormInputComponent, FlexFormSelectComponent, FlexFormTextareaComponent, FlexFormCheckboxComponent],
  exports: [FlexFormComponent]
})
export class FlexFormModule { }
