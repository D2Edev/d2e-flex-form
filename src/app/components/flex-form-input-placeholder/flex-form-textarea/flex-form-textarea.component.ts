import { Component, OnInit } from '@angular/core';
import { AbstractFormInput } from '../../abstract-form-input';

@Component({
  selector: 'app-flex-form-textarea',
  templateUrl: './flex-form-textarea.component.html',
  styleUrls: ['./flex-form-textarea.component.css']
})
export class FlexFormTextareaComponent extends AbstractFormInput implements OnInit {

  ngOnInit() {
  }

}
