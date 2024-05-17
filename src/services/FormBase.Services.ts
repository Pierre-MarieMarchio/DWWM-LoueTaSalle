import FormModel from "../models/FormModel";
import IdGenerator from "../classes/IdGenerator";

export default abstract class FormBaseServices<T> {
  protected _formdata: any;
  protected _form: HTMLFormElement;
  protected _formResult: FormModel;
  protected _formResultArray: Array<T> = [];
  protected _formIsValid: boolean;
  protected _keyItem: string;
  [key: string]: any;

  constructor(formSubmit: any, keyItem: string, form: HTMLFormElement) {
    this._form = form;
    this._formdata = formSubmit;
    this._formResult = {};
    this._formIsValid = false;
    this._keyItem = keyItem;
    this.read();

    
    
  }

  set formdata(data: any) {
    this._formdata = data;
  }

  get formIsValid() {
    return this._formIsValid;
  }

  protected abstract validateFormResult(formresult: any): boolean;

  protected validateIndividualField(
    fieldName: string,
    field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
    methodName: string
  ): boolean {
    try {
      const result = this[methodName]();
      field.classList.remove("is-invalid");
      field.classList.add("is-valid");
      this._formResult[fieldName] = result;

      return true;
    } catch (error) {
      console.log(error, methodName);
      field.classList.remove("is-valid");
      field.classList.add("is-invalid");
      return false;
    }
  }

  protected validateAllFields() {
    if (this._form) {
      this._form
        .querySelectorAll("input, select, textarea")
        .forEach((field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
          if (field.type !== "submit") {
            const methodName = "check" + field.name.charAt(0).toUpperCase() + field.name.slice(1);
           
            this._formIsValid = this.validateIndividualField(field.name, field, methodName);
          }
        });
    }
  }

  protected addID(): void {
    this._formResult.id = IdGenerator.generateId();

  };

  public validateForm(): void {
    
    this.validateAllFields();
    this.addID();
    if (this.validateFormResult(this._formResult)) {
      if (this._formIsValid) {
        this._formResultArray.push(this._formResult as T);
      }
    }
  }

  public create(): void {
    if (this._formResultArray) {
      localStorage.setItem(this._keyItem, JSON.stringify(this._formResultArray));
      this._formIsValid = false;
    }
    return;
  }

  public read(): void {
    const localValue = localStorage.getItem(this._keyItem);
    if (localValue) {
      this._formResultArray = JSON.parse(localValue);
    } else {
      this._formResultArray = [];
    }
  }

  public update(): void {}

  public delete(): void {}
}
