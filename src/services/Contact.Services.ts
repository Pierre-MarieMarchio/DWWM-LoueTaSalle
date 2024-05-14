import ContactModel from "../models/ContactModel";

export default class ContactService {
  private _formdataContact: any;
  private _form: HTMLElement;
  private _formresult: ContactModel | null;

  private _testData: ContactModel = {
    company: "string",
    lastname: "string",
    firstname: "string",
    country: "string",
    city: "string",
    number: "6060625",
    validationTextarea: "string",
  }

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
    if (typeof this._formdataContact.company === "string") {
      return this._formdataContact.company;
    } else {
      throw new Error("Error company string");
    }
  }

  private checkLastname(): string {
    if (typeof this._formdataContact.lastname === "string") {
      return this._formdataContact.lastname;
    } else {
      throw new Error("Error Lastname string");
    }
  }

  private checkFirstname(): string {
    if (typeof this._formdataContact.firstname === "string") {
      return this._formdataContact.firstname;
    } else {
      throw new Error("Error FistName string");
    }
  }

  private checkCountry(): string {
    if (this._formdataContact.country === "France") {
      return this._formdataContact.firstname;
    } else {
      throw new Error("Error Country France");
    }
  }
  private checkCity(): string {
    if (
      this._formdataContact.city === "Paris" ||
      this._formdataContact.city === "Lyon" ||
      this._formdataContact.city === "Marseille"
    ) {
      return this._formdataContact.firstname;
    } else {
      throw new Error("Error City Paris or Lyon or Marseille");
    }
  }
  private checkNumber(): any {
    if (typeof this._formdataContact.number === "number") {
      return this._formdataContact.firstname;
    } else {
      throw new Error("Error Number");
    }
  }
  public validateForm() {
    this._form.querySelectorAll("input, select, textarea").forEach((field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
        const name = field.name;

        try {
          this["check" + name.charAt(0).toUpperCase() + name.slice(1)]();
          console.log(name + " c'est validé");
          //field.classList.remove('is-invalid');
          //field.classList.add('is-valid');
        } catch (error) {
          console.log(name + " c'est pas validé");
          //field.classList.remove('is-valid');
          //field.classList.add('is-invalid');
          // TODO
          //const errorElement = field.parentElement.querySelector('.invalid-feedback');
          //if (errorElement) {
          //  errorElement.textContent = error.message;
          //}
        }
      });
  }

  public createContactForm(): void {
    this._formresult = this._testData;
    localStorage.setItem('contact', JSON.stringify(this._formresult));
  }
}
