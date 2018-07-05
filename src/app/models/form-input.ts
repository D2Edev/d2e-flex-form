import { FormInputOption } from './form-input-option';
import { Entry } from './entry';

export class FormInput {
  public hidden = false;
  public name: string;
  public type: string;
  public value: string | number | boolean;
  public label: string;
  public constraints: FormInputOption[];
  public options: Entry[];
  public expButton: boolean;

  constructor(
    name: string, type: string, label: string, hidden: boolean, expButton: boolean, ...constraints: FormInputOption[]
  ) {
    this.name = name;
    this.type = type;
    this.label = label;
    this.hidden = hidden;
    this.constraints = constraints;
    this.expButton = expButton;
  }


}
