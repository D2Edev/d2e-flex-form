import { FormInput } from '../models/form-input';
import { FormInputOption } from '../models/form-input-option';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, ValidatorFn } from '@angular/forms';
import { SelectionListener } from '../models/selection-listener';
import { ErrorMessages } from '../models/error-messages';

@Component({
  selector: 'app-flex-form',
  templateUrl: './flex-form.component.html'
})
export class FlexFormComponent implements OnInit, SelectionListener<string> {

  @Output() submitted = new EventEmitter<any>();
  @Output() selected = new EventEmitter<string>();

  allowShow = false;
  listener = this;
  inputs: FormInput[];
  myForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }


  onSelect(value: string) {
    this.selected.emit(value);
  }

  listFormErrors(): { fieldName: string, errDesc: string }[] {
    const errors: { fieldName: string, errDesc: string }[] = [];
    const controls = this.myForm.controls;
    this.inputs.forEach(
      input => {
        const control = controls[input.name];
        const ers = control.errors;
        if (!ers) {
          return;
        }
        const err = {
          fieldName: input.name,
          errDesc: ers.error
        };
        errors.push(err);
      }
    );
    return errors;
  }


  @Input('inputs')
  set buildForm(data: FormInput[]) {
    // console.log(data);
    if (data) {
      const formControls = {};
      data.forEach(input => {
        const key = input.name;
        const value = input.value;
        //        console.log(key+' '+ input.options.length);
        const validators = this.getValidators(input.type, input.constraints);
        //        console.log(validators);
        const control: FormControl = new FormControl(input.value, validators);
        control.valueChanges.subscribe(ctrlValue => {

          switch (input.type) {
            case 'number':
              if (+ctrlValue === value) {
                control.markAsPristine();
              }
              break;
            default:
              if (ctrlValue === value) {
                control.markAsPristine();
              }
          }
        });
        formControls[key] = control;
      });
      this.myForm = this._formBuilder.group(formControls);
      this.inputs = data;
      this.allowShow = true;
    }
  }

  saveConfig() {
    const result = this.normalizeReply(this.myForm.value);
    this.submitted.emit(result);
  }

  onChange(name: string) {
    const control = this.myForm.get(name);
    control.markAsDirty();
    control.setValue(!control.value);
  }

  allowSubmit() {
    this.myForm.markAsDirty();
  }

  private getValidators(type: string, options: FormInputOption[]) {
    if (!options) {
      return null;
    }
    const validators: ValidatorFn[] = [];
    const self = this;
    options.forEach(option => {
      // 'required' condition
      if (!option.max && !option.min && !option.pattern) {

        validators.push(function (input: FormControl) {
          if (!input.value) {
            // console.log(input.value);
            if (option.emptyFieldMessage) {
              return { error: option.emptyFieldMessage };
            } else {
              return { error: ErrorMessages.emptyFldMsg };

            }
          } else {
            return null;
          }
        });
        return;
      }
      switch (type) {
        case 'number': {
          validators.push(function (input: FormControl) {
            const val = +input.value;
            if (option.min !== undefined && val > option.max) {
              if (option.maxMessage) {
                return { error: option.maxMessage };
              } else {
                return { error: ErrorMessages.maxExcMsg + option.max };
              }
            }
            if (option.min !== undefined && val < option.min) {
              if (option.minMessage) {
                return { error: option.minMessage };
              } else {
                return { error: ErrorMessages.minExcMsg + option.min };
              }
            }
            return null;
          });
          break;
        }
        case 'text': {
          validators.push(function (input: FormControl) {
            const val: string = input.value;
            if (!val) { return; }
            if (option.min !== undefined && val.length < option.min) {
              if (option.minMessage) {
                return { error: option.minMessage };
              } else {
                return { error: ErrorMessages.minTexLenMsg + option.min };
              }
            }
            if (option.max !== undefined && val.length > option.max) {
              if (option.maxMessage) {
                return { error: option.maxMessage };
              } else {
                return { error: ErrorMessages.maxTexLenMsg + option.max };
              }
            }
            const pattern: string = option.pattern;
            if (pattern !== undefined && val.search(pattern) === -1) {
              if (option.patternMessage) {
                return { error: option.patternMessage };
              } else {
                return { error: ErrorMessages.badTexPtrnMsg + option.pattern };
              }

            }
            return null;
          });
          break;
        }
        default: {
        }
      }

    });
    return validators;
  }

  private normalizeReply(data) {
    const keys: string[] = Object.keys(data);
    keys.forEach(key => {
      const input = this.inputs.find(elt => {
        return elt.name === key;
      });
      if (input) {
        switch (input.type) {
          case 'number': {
            const val = data[key];
            data[key] = +val;
            break;
          }
          case 'select': {
            const res = Number(data[key]);
            if (!isNaN(res)) {
              data[key] = res;
            }
            break;
          }
          default: {
            // do nothing
          }
        }

      } else {
        // do nothing?
      }

    });
    return data;
  }

}
