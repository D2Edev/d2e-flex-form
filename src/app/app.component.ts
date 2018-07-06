import { Component, OnInit } from '@angular/core';
import { FormInput } from './modules/models/form-input';
import { FormInputOption } from './modules/models/form-input-option';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputs: FormInput[];

  ngOnInit(): void {
    const tmp: FormInput[] = [];
    let constr01 = new FormInputOption(-5, 10);
    constr01.maxMessage = 'Don\'t try get more then ten!';
    let input = new FormInput('len', 'number', 'Length', false, true, new FormInputOption(), constr01);
    tmp.push(input);
    constr01 = new FormInputOption(2, 7);
    constr01.minMessage = 'Kuda polez, davaj obratno, minimum 2!';
    input = new FormInput('name', 'text', 'Name', false, false, new FormInputOption(), constr01);
    tmp.push(input);
    input = new FormInput('comment', 'textarea', 'Comment', false, false);
    tmp.push(input);
    this.inputs = tmp;
  }

  submitData(json: any) {
    console.log(json);

  }

  selected(value: string) {
    console.log('selected: ' + value);

  }
}
