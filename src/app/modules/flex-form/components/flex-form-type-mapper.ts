import { Type } from '@angular/core';
import { FlexFormInputComponent } from './flex-form-input-placeholder/flex-form-input/flex-form-input.component';
import { FlexFormSelectComponent } from './flex-form-input-placeholder/flex-form-select/flex-form-select.component';
import { FlexFormTextareaComponent } from './flex-form-input-placeholder/flex-form-textarea/flex-form-textarea.component';
import { FlexFormCheckboxComponent } from './flex-form-input-placeholder/flex-form-checkbox/flex-form-checkbox.component';

export class FlexFormTypeMapper {

    private static readonly types: { name: string, type: Type<any> }[] = [
        { name: 'text', type: FlexFormInputComponent },
        { name: 'select', type: FlexFormSelectComponent },
        { name: 'textarea', type: FlexFormTextareaComponent },
        { name: 'checkbox', type: FlexFormCheckboxComponent },
        { name: 'number', type: FlexFormInputComponent }
    ];

    static getComponentType(typeName: string): Type<any> {
        const result = FlexFormTypeMapper.types.find(elt => {
            return elt.name === typeName;
        });
        if (result) {
            return result.type;
        } else {
            return null;
        }
    }
}
