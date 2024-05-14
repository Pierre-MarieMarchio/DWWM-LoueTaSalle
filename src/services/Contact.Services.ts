import ContactModel from "../models/ContactModel";

export default class ContactService {
  private _formdataContact: any;
  private _form: HTMLElement;
  private _formresult: ContactModel | null;

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
      if (
        this._formdataContact.company.length > 1 &&
        this._formdataContact.company.length < 42
      ) {
        return this._formdataContact.company;
      } else {
        throw new Error(
          "Le nom de la société doit contenir entre 2 et 50 caractères."
        );
      }
    } else {
      throw new Error(
        "Le nom de la société doit être une chaine de caractères"
      );
    }
  }

  private checkLastname(): string {
    if (typeof this._formdataContact.lastname === "string") {
      if (
        this._formdataContact.lastname.length > 1 &&
        this._formdataContact.lastname.length < 42
      ) {
        return this._formdataContact.lastname;
      } else {
        throw new Error(
          "Le nom de famille doit contenir entre 2 et 50 caractères."
        );
      }
    } else {
      throw new Error("Le nom de famille doit être une chaine de caractères");
    }
  }

  private checkFirstname(): string {
    if (typeof this._formdataContact.firstname === "string") {
      if (
        this._formdataContact.firstname.length > 1 &&
        this._formdataContact.firstname.length < 42
      ) {
        return this._formdataContact.firstname;
      } else {
        throw new Error("Le prénom doit contenir entre 2 et 50 caractères.");
      }
    } else {
      throw new Error("Le prénom doit être une chaine de caractères");
    }
  }

  private checkCountry(): string {
    if (this._formdataContact.country === "France") {
      return this._formdataContact.country;
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
      return this._formdataContact.city;
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
    this._form
      .querySelectorAll("input, select, textarea")
      .forEach(
        (field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
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
        }
      );
  }
}
