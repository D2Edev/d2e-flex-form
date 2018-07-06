import { FormGroup } from '@angular/forms';
import { FormInput } from '../../models/form-input';
import { SelectionListener } from '../../models/selection-listener';

export abstract class AbstractFormInput {

    value: FormInput;
    parentForm: FormGroup;
    selectionListener: SelectionListener<string>;

    onSelect() {
        if (this.selectionListener) {
            this.selectionListener.onSelect(this.value.name);
        }

    }
}
