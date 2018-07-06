import { Component, OnInit } from '@angular/core';
import { FormInput } from './modules/flex-form/models/form-input';
import { FormInputOption } from './modules/flex-form/models/form-input-option';
import { Entry } from '../../public_api';

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
    let input = new FormInput('len', FormInput.NUMBER, 'Length', false, true, new FormInputOption(), constr01);
    tmp.push(input);
    constr01 = new FormInputOption(2, 7);
    constr01.minMessage = 'Kuda polez, davaj obratno, minimum 2!';
    input = new FormInput('name', FormInput.TEXT, 'Name', false, false, new FormInputOption(), constr01);
    tmp.push(input);
    input = new FormInput('comment', FormInput.TEXTAREA, 'Comment', false, false);
    tmp.push(input);
    const options: Entry[] = [];
    options.push(new Entry('Good', 'g'));
    options.push(new Entry('Funny', 'f'));
    options.push(new Entry('Sad', 's'));
    options.push(new Entry('Does anyone care?', 'd'));
    input = new FormInput('sel', FormInput.SELECT, 'What\'s your mood?', false, false);
    input.options = options;
    tmp.push(input);
    input = new FormInput('agreed', FormInput.CHECKBOX, 'Agreed with conditions', false, false);
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
