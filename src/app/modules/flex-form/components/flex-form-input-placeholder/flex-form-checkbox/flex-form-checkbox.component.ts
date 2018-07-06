import { Component, OnInit } from '@angular/core';
import { AbstractFormInput } from '../../abstract-form-input';

@Component({
  selector: 'app-flex-form-checkbox',
  templateUrl: './flex-form-checkbox.component.html',
  styleUrls: ['./flex-form-checkbox.component.css']
})
export class FlexFormCheckboxComponent extends AbstractFormInput implements OnInit {

  ngOnInit() {
  }

  onChange(name: string) {
    const control = this.parentForm.get(name);
    control.markAsDirty();
    control.setValue(!control.value);
  }

}
