import { Component, OnInit } from '@angular/core';
import { AbstractFormInput } from '../../abstract-form-input';

@Component({
  selector: 'app-flex-form-input',
  templateUrl: './flex-form-input.component.html',
  styleUrls: ['./flex-form-input.component.css']
})
export class FlexFormInputComponent extends AbstractFormInput implements OnInit {

  ngOnInit() {
  }

}
