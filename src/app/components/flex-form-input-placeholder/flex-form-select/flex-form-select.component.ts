import { Component, OnInit } from '@angular/core';
import { AbstractFormInput } from '../../abstract-form-input';

@Component({
  selector: 'app-flex-form-select',
  templateUrl: './flex-form-select.component.html',
  styleUrls: ['./flex-form-select.component.css']
})
export class FlexFormSelectComponent extends AbstractFormInput implements OnInit {

  ngOnInit() {
  }

}
