import FormModel from "../models/FormModel";

export default abstract class FormBaseServices<T> {
  protected _formdata: any;
  protected _form: HTMLFormElement;
  protected _formResult: FormModel;
  protected _formResultArray: Array<T> = [];
  protected _formIsValid: boolean;
  protected _localItem: string;
  [key: string]: any;

  constructor(formSubmit: any, localItem: string, form: HTMLFormElement) {
    this._form = form;
    this._formdata = formSubmit;
    this._formResult = {};
    this._formIsValid = false;
    this._localItem = localItem;
  }

  set formdata(data: any) {
    this._formdata = data;
  }

  get formIsValid() {
    return this._formIsValid;
  }

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
      console.log(error);
      field.classList.remove("is-valid");
      field.classList.add("is-invalid");
      return false;
    }
  }

  public validateForm(): void {
    let isValid: boolean = false;
    if (this._form) {
      this._form
        .querySelectorAll("input, select, textarea")
        .forEach((field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
          if (field.type !== "submit") {
            const methodName = "check" + field.name.charAt(0).toUpperCase() + field.name.slice(1);
            isValid = this.validateIndividualField(field.name, field, methodName);
          }
        });
    }
    if (isValid) {
      this._formResultArray.push(this._formResult as T);
    }
    this._formIsValid = isValid;
  }

  public create(): void {
    if (this._formResultArray) {
      localStorage.setItem(this.localItem, JSON.stringify(this._formResultArray));
      this._formIsValid = false;
    }
    return;
  }

  public read(): void {
    const localValue = localStorage.getItem(this.localItem);
  }
}
