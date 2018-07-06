export class FormInputOption {

  minMessage: string;
  maxMessage: string;
  patternMessage: string;
  emptyFieldMessage: string;

  constructor(

    public min?: number,
    public max?: number,
    public pattern?: string
  ) { }

}
