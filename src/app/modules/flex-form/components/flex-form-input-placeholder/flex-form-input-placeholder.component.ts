import { Component, OnInit, Input, ComponentRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { FormInput } from '../../../models/form-input';
import { FlexFormTypeMapper } from '../flex-form-type-mapper';
import { FormGroup } from '@angular/forms';
import { AbstractFormInput } from '../abstract-form-input';
import { SelectionListener } from '../../../models/selection-listener';

@Component({
  selector: 'app-flex-form-input-placeholder',
  templateUrl: './flex-form-input-placeholder.component.html'
})
export class FlexFormInputPlaceholderComponent implements OnDestroy, OnInit {

  @Input() value: FormInput;
  @Input() parentForm: FormGroup;
  @Input() listener: SelectionListener<string>;

  private _componentRef: ComponentRef<{}>;

  @ViewChild('input_placeholder', { read: ViewContainerRef })
  container: ViewContainerRef;


  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    if (this.value) {
      const type = FlexFormTypeMapper.getComponentType(this.value.type);
      const factory = this._componentFactoryResolver.resolveComponentFactory(type);
      this._componentRef = this.container.createComponent(factory);
      const abstractInput = (<AbstractFormInput>this._componentRef.instance);
      abstractInput.parentForm = this.parentForm;
      abstractInput.value = this.value;
      abstractInput.selectionListener = this.listener;
    }
  }

  ngOnDestroy(): void {
    if (this._componentRef) {
      this._componentRef.destroy();
      this._componentRef = null;
    }
  }

}
