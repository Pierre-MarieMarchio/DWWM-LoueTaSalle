export interface ContactModelInterface {
  company: string;
  lastname: string;
  firstname: string;
  country: string;
  city: string;
  number: any;
  validationTextarea: string;
}

export default class ContactModel {
  private _formdataContact: any;
  private _form: HTMLElement;
  private _formresult: ContactModelInterface;

  constructor(formSubmit: any, form: HTMLElement) {
    this._form = form;
    this._formdataContact = formSubmit;
    this._formresult = null;
  }

  [key: string]: any;

  set formdataContact(data: any) {
    this._formdataContact = data;
  }
  private checkCompany(): string {
    if (typeof this._formresult.company === "string") {
      return this._formresult.company;
    } else {
      throw new Error("Error company string");
    }
  }

  private checkLastname(): string {
    if (typeof this._formresult.lastname === "string") {
      return this._formresult.lastname;
    } else {
      throw new Error("Error Lastname string");
    }
  }

  private checkFirstname(): string {
    if (typeof this._formresult.firstname === "string") {
      return this._formresult.firstname;
    } else {
      throw new Error("Error FistName string");
    }
  }

  private checkCountry(): string {
    if (this._formresult.country === "France") {
      return this._formresult.firstname;
    } else {
      throw new Error("Error Country France");
    }
  }
  private checkCity(): string {
    if (
      this._formresult.city === "Paris" ||
      this._formresult.city === "Lyon" ||
      this._formresult.city === "Marseille"
    ) {
      return this._formresult.firstname;
    } else {
      throw new Error("Error City Paris or Lyon or Marseille");
    }
  }
  private checkNumber(): any {
    if (typeof this._formresult.number === "number") {
      return this._formresult.firstname;
    } else {
      throw new Error("Error Number");
    }
  }
  public validateForm() {
    console.log(this._formdataContact);
  }
}
